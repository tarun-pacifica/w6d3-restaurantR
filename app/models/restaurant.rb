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