const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Token'ı al
  const token = req.header('x-auth-token');
  
  // Token yoksa reddet
  if (!token) {
    return res.status(401).json({ message: 'Yetkisiz erişim' });
  }
  
  try {
    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // User bilgisini request'e ekle
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Geçersiz token' });
  }
};