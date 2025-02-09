class GreetingsController < ApplicationController
  def greeting
    @current_user = current_user
  end
end
