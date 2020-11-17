class Api::V1::OrphanagesController < ApplicationController
    before_action :set_orphanage, only: [:show, :update, :destroy]

    def index
        @orphanages = Orphanage.all

        render :index, status: :ok
    rescue Exception => error
        render json: {
            message: "error => #{error}"
        }, status: :internal_server_error
    end

    def create
        @orphanage = Orphanage.create orphanage_params

        render :created, status: :created
    rescue Exception => error
        render json: {
            message: "error => #{error}"
        }, status: :internal_server_error
    end

    def show
        if @orphanage
            render :show, status: :ok
        else
            render :not_found, status: :not_found
        end
    rescue Exception => error
        render json: {
            message: "error => #{error}"
        }, status: :internal_server_error
    end

    def update
        if @orphanage
            @orphanage.update orphanage_params
            render :updated, status: :ok
        else
            render :not_found, status: :not_found
        end
    rescue Exception => error
        render json: {
            message: "error => #{error}"
        }, status: :internal_server_error
    end

    def destroy
        if @orphanage
            @orphanage.destroy
            render :deleted, status: :ok
        else
            render :not_found, status: :not_found
        end
    rescue Exception => error
        render json: {
            message: "error => #{error}"
        }, status: :internal_server_error
    end

    private
        def orphanage_params
            params.permit(:name, :about, :latitude, :longitude, :instructions, :opening_hours, :open_on_weekends, {images: []})
        end

        def set_orphanage
            @orphanage = Orphanage.where(id: params[:id]).first
        end
end
