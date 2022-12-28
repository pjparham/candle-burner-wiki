# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(username: "jlsmith", password: "helloworld", first_name: "John", last_name: "Smith", email: "jlsmith@gmail.com")
user2 = User.create(username: "rfwells", password: "foobar", first_name: "Renee", last_name: "Wells", email: "rfwells@gmail.com")
candle1 = Candle.create(name: "Coffee & Whiskey", producer: "Bath & Body Works", notes: "bold Irish whiskey, splash of vanilla and hint of coffee.", size: "14.5 oz", price: "$26.50", image_url: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf979a7fc/hires/026538273.jpg?sh=471&yocs=o_s_")
candle2 = Candle.create(name: "Sweater Weather", producer: "Bath & Body Works", notes: "fresh sage, juniper berries, aromatic eucalyptus and fresh woods.", size: "14.5 oz", price: "$26.50", image_url: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2d85c892/hires/026531868.jpg?sh=471&yocs=o_s_")
review1 = Review.create(summary: "Love it.", body: "This is my favorite candle of all time. It takes me to my happy place.", candle_id: 1, user_id: 1)
review2 = Review.create(summary: "You need this.", body: "When I light this candle, winter starts. It transports me to a winter wonderland.", candle_id: 2, user_id: 2)
favorite1 = Favorite.create(user_id: 1, candle_id: 2)
favorite1 = Favorite.create(user_id: 2, candle_id: 1)


