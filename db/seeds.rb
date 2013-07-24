Restaurant.destroy_all
User.destroy_all

u1 = User.create(:name => 'Bob', :email => 'bob@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => 'Sue', :email => 'sue@gmail.com', :password => 'a', :password_confirmation => 'a')

r1 = Restaurant.create(:name => 'Lego House', :cuisine => 'Thai', :address => '611 Bourke St Surry Hills')
r2 = Restaurant.create(:name => 'Wagamammas', :cuisine => 'Asian fusion', :address => '38 bridge street Sydney')

u1.restaurants << r1 << r2