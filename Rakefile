desc 'Deploy website'
task :deploy do
  sh 'rsync -aq --delete _site/ raf@web.yux.ch:/srv/www/dev.kitchen/'
end
