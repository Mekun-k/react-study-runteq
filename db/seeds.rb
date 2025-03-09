# create a user
user = User.create!(name: "user1", email: "user1@example.com", password: "1234qwer", password_confirmation: "1234qwer")

# create three categories
category1 = user.categories.create!(name: "Todo")
category2 = user.categories.create!(name: "Doing")
category3 = user.categories.create!(name: "Done")

# create items for each category
category1.items.create!(title: "item1", content: "content1", position: 1, user:)
category1.items.create!(title: "item2", content: "content2", position: 2, user:)
category1.items.create!(title: "item3", content: "content3", position: 3, user:)
category2.items.create!(title: "item4", content: "content4", position: 1, user:)
category2.items.create!(title: "item5", content: "content5", position: 2, user:)
category2.items.create!(title: "item6", content: "content6", position: 3, user:)
category3.items.create!(title: "item7", content: "content7", position: 1, user:)
category3.items.create!(title: "item8", content: "content8", position: 2, user:)
category3.items.create!(title: "item9", content: "content9", position: 3, user:)

