class Api::IndexController < ApplicationController
    def index
        render :index, status: :ok
    end
end
