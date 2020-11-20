RSpec.describe Api::V1::OrphanagesController, type: :request do
    context "Test Endpoints" do
        context "GET /api/v1/orphanages/" do
            describe "when there are no orphanages" do
                it "should be empty" do
                    get "/api/v1/orphanages/"
                    
                    expect(JSON.parse(response.body)["orphanages"]).to be_empty 
                end
            end

            describe "when there are orphanages" do
                before do
                    Orphanage.create(
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
        end
    end
end