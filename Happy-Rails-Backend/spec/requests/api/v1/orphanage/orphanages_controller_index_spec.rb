RSpec.describe Api::V1::OrphanagesController, type: :request do
    context "GET /api/v1/orphanages/" do
        describe "when there are no orphanages" do
            it "should be empty" do
                get "/api/v1/orphanages/"
                
                expect(JSON.parse(response.body)["orphanages"]).to be_empty 
            end
        end

        describe "when there are orphanages" do
            before do
                create(
                    :orphanage,
                    name: "Lar Kuzola",
                    about: "Lar de caridade",
                    latitude: -8.9179403,
                    longitude: 13.200951799999999,
                    instructions: "vem de carro",
                    opening_hours: "18h as 20h",
                    open_on_weekends: true,
                    images: [
                        fixture_file_upload('files/file1.jpg', 'image/jpg'),
                        fixture_file_upload('files/file2.jpg', 'image/jpg')
                    ]
                )
            end

            it "should return 1 orphanages" do
                get "/api/v1/orphanages/"

                response_orphanage = (JSON.parse(response.body)["orphanages"]).map(&:symbolize_keys).first
                
                expect(response_orphanage).to include(
                    {
                        id: response_orphanage[:id],
                        name: "Lar Kuzola",
                        about: "Lar de caridade",
                        latitude: -8.9179403,
                        longitude: 13.2009518,
                        instructions: "vem de carro",
                        opening_hours: "18h as 20h",
                        open_on_weekends: true,
                        images: [
                            {
                                "url" => "/uploads/orphanage/images/#{response_orphanage[:id]}/file1.jpg"
                            },
                            {
                                "url" => "/uploads/orphanage/images/#{response_orphanage[:id]}/file2.jpg"
                            }
                        ]
                    }
                )
            end
        end

        describe "when return the correct http status code" do
            it "should return status 200" do
                get "/api/v1/orphanages/"

                expect(response).to have_http_status(:ok) 
            end
        end

        describe "when return the correct content type" do
            it "returns application/json; charset=utf-8 content type" do
                get "/api/v1/orphanages/"
               
                expect(response.content_type).to eq("application/json; charset=utf-8") 
            end
        end
    end
end