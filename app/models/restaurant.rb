# == Schema Information
#
# Table name: restaurants
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  cuisine    :string(255)
#  address    :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  latitude   :float            default(0.0)
#  longitude  :float            default(0.0)
#

class Restaurant < ActiveRecord::Base
  before_save :geocode

  attr_accessible :name, :cuisine, :address, :latitude, :longitude

  private
  def geocode
    result = Geocoder.search(self.address).first

    if result.present?
      self.latitude = result.latitude
      self.longitude = result.longitude
    end
  end
end
