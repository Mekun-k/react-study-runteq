class CategoriesController < ActionController::API
  def index
    categories = current_user.categories.all.order(created_at: :asc)
    render json: categories.as_json(only: [:id, :name])
  end

  def create
    category = current_user.categories.new(category_params)
    if category.save
      render json: { message: '保存が成功しました', category: category.as_json(only: [:id, :name]) }, status: :ok
    else
      render json: { error: '保存に失敗しました' }, status: :unprocessable_entity
    end
  end

  def destroy
    category = Category.find(params[:id])
    if category.destroy
      render json: { message: '削除が成功しました' }, status: :ok
    else
      render json: { error: '削除に失敗しました' }, status: :unprocessable_entity
    end
  end

  def destroy_all_items
    category = Category.find(params[:id])

    if destroy_items(category.items)
      render json: { message: '削除が成功しました' }, status: :ok
    else
      render json: { error: '削除に失敗しました' }, status: :unprocessable_entity
    end
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

  def destroy_items(items)
    Item.transaction do
      items.each do |item_data|
        item = Item.find(item_data['id'])
        item.destroy!
      end
    rescue => e
      Rails.logger.error "Failed to destroy items: #{e.message}"
      return false
    end
    true
  end
end

