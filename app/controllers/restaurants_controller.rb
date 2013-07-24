class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def create
    binding.pry
    restaurant = Restaurant.create(params[:restaurant])

    render :json => restaurant
  end

  def update
    id = params[:id]
    restaurant = Restaurant.find(params[:id])
    restaurant.update_attributes(params[:restaurant])

    render :json => restaurant

  end
end


