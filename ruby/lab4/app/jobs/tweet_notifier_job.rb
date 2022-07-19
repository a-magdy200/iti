class TweetNotifierJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    TweetNotifier.new(tweet).notify
  end
end

