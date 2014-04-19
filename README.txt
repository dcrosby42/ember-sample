
Eg, how to serve:
ruby -rwebrick -e"s = WEBrick::HTTPServer.new(:Port => $PORT, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start" 
