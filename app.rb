# app.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/events' do
  erb :events
end
