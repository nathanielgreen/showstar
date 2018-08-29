# app.rb
require "bundler/setup"
require 'sinatra'

  #navbar
  get '/' do
    erb :index
  end

  get '/loughborough' do
    erb :loughborough
  end

  get '/gallery' do
    erb :gallery
  end

  get '/planyourparty' do
    erb :planyourparty
  end

  get '/news' do
    erb :news
  end

  get '/music' do
    erb :music
  end

  get '/contact' do
    erb :contact
  end

  get '/jobs' do
    erb :jobs
  end


  #events
  get '/badmanners' do
    erb :badmanners
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

  get '/selectedsounds' do
    erb :selectedsounds
  end

  get '/eventportfolio' do
    erb :eventportfolio
  end

