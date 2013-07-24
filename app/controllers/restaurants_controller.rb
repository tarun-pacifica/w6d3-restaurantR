class RestaurantsController < ApplicationController
  before_filter :ensure_logged_in
  def index
    @restaurants =  Restaurant.all
  end

  def create

    restaurant = Restaurant.create(params[:restaurant])
    @auth.restaurants << restaurant
    render :json => restaurant
  end

  def update
    id = params[:id]
    restaurant = Restaurant.find(params[:id])
    restaurant.update_attributes(params[:restaurant])

    render :json => restaurant

  end
end


