class BeersController < ApplicationController
  def index
    beers = Beer.all
    render json: beers
  end

  def show
    beer = Beer.find_by(id: params[:id])
    render json: beer
  end

  def create
    beer = Beer.new(
      name: params["name"],
      style: params["style"],
      description: params["description"],
      image_url: params["image_url"],
    )
    if beer.save
      render json: beer
    else
      render json: { errors: beer.errors.full_messages },
             status: 422
    end
  end

  def update
    beer_id = params["id"]
    beer = Beer.find_by(id: beer_id)

    beer.name = params["name"] || beer.name
    beer.style = params["style"] || beer.style
    beer.description = params["description"] || beer.description

    if beer.save
      render json: beer
    else
      render json: { errors: beer.errors.full_messages },
             status: 422
    end
  end

  def destroy
    beer_id = params["id"]
    beer = Beer.find_by(id: beer_id)
    beer.destroy
    render json: { message: "Beer successfully destroyed!" }
  end
end
