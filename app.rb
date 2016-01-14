# app.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/contact' do
  erb :contact
end

get '/playhouse' do
  erb :playhouse
end

get '/xothursdays' do
  erb :xothursdays
end

get '/backwhen' do
  erb :backwhen
end

get '/mayhem' do
  erb :mayhem
end
