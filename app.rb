# app.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/events' do
  erb :events
end

get '/playhouse' do
  erb :playhouse
end

get '/xothursdays' do
  erb :xothursdays
end
