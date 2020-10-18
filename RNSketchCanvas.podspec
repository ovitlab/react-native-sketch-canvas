require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = 'RNSketchCanvas'
  s.version      = package['version']
  s.summary      = package['description']
<<<<<<< HEAD
  s.homepage     = 'https://github.com/Kichiyaki/react-native-sketch-canvas'
=======
  s.homepage     = 'https://github.com/creambyemute/react-native-sketch-canvas'
>>>>>>> e9bb092f927039fb6639fc72f2533345967c0c9b
  s.license      = package['license']
  s.authors      = package['author']
  s.source       = { :git => package['repository']['url'] }
  s.platform     = :ios, '8.0'
  s.source_files = 'ios/**/*.{h,m}'
  s.dependency   'React'
end
