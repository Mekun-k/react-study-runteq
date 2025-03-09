class ItemsController < ActionController::API
  def index
    items = current_user.items.includes(:category)
    render json: items
  end

  def create
    category_id = item_params[:category_id]
    category = current_user.categories.find_by(id: category_id)

    unless category
      return render json: { error: '無効なカテゴリです' }, status: :unprocessable_entity
    end

    last_item_position = category.items.maximum(:position) || 0
    new_item_position = last_item_position + 1
    item = current_user.items.new(item_params.except(:category_id).merge(category: category, position: new_item_position))
    if item.save
      render json: { message: '保存が成功しました', item: item }, status: :ok
    else
      render json: { error: '保存に失敗しました' }, status: :unprocessable_entity
    end
  end

  def update
    item = current_user.items.find(params[:id])
    if item.update(item_params)
      render json: { message: '更新が成功しました', item: item }, status: :ok
    else
      render json: { error: '更新に失敗しました' }, status: :unprocessable_entity
    end
  end

  def destroy
    item = current_user.items.find(params[:id])
    if item.destroy
      render json: { message: '削除が成功しました' }, status: :ok
    else
      render json: { error: '削除に失敗しました' }, status: :unprocessable_entity
    end
  end

  def update_all_position
    updated_items = params[:items]
    if update_items_position(updated_items)
      render json: { message: '更新が成功しました' }, status: :ok
    else
      render json: { error: '更新に失敗しました' }, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:item).permit(:title, :content, :assignee, :category_id)
  end

  def update_items_position(items)
    Item.transaction do
      items.each do |item_data|
        item = Item.find(item_data['id'])
        category = Category.find(item_data['category_id'])
        item.update!(category_id: category.id, position: item_data['position'])
      end
    rescue => e
      Rails.logger.error "Failed to update items: #{e.message}"
      return false
    end
    true
  end
end

