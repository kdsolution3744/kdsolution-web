const getEmailHtml = (
  name: string,
  email: string,
  company: string,
  phone: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>새로운 문의 알림</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    }
    
    body {
      background-color: #f7f9fc;
      padding: 20px;
    }
    
    .email-container {
      max-width: 650px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    }
    
    .email-header {
      background: linear-gradient(135deg, #4361ee, #3a0ca3);
      color: white;
      padding: 30px 40px;
      text-align: center;
    }
    
    .email-logo {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
    
    .email-title {
      font-size: 24px;
      font-weight: 600;
      margin: 20px 0 10px;
    }
    
    .email-subtitle {
      font-size: 16px;
      opacity: 0.9;
      margin-top: 8px;
    }
    
    .email-body {
      padding: 40px;
    }
    
    .info-card {
      background: #f8f9ff;
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 30px;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 15px;
    }
    
    .info-item {
      margin-bottom: 15px;
    }
    
    .info-label {
      font-size: 14px;
      font-weight: 600;
      color: #5a67d8;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
    }
    
    .info-label i {
      margin-right: 8px;
      font-size: 16px;
    }
    
    .info-value {
      font-size: 16px;
      color: #2d3748;
      font-weight: 500;
      padding-left: 24px;
    }
    
    .message-container {
      background: #f8f9ff;
      border-radius: 10px;
      padding: 25px;
    }
    
    .message-label {
      font-size: 16px;
      font-weight: 600;
      color: #5a67d8;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }
    
    .message-content {
      background: white;
      border-radius: 8px;
      padding: 20px;
      line-height: 1.7;
      color: #4a5568;
      font-size: 15px;
      white-space: pre-line;
    }
    
    .email-footer {
      text-align: center;
      padding: 25px 40px;
      background: #f0f4ff;
      color: #718096;
      font-size: 14px;
    }
    
    .footer-links {
      margin-top: 10px;
    }
    
    .footer-links a {
      color: #5a67d8;
      text-decoration: none;
      margin: 0 10px;
    }
    
    @media (max-width: 600px) {
      .email-header, .email-body, .email-footer {
        padding: 25px;
      }
      
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <div class="email-logo">COMPANY</div>
      <h1 class="email-title">새로운 문의가 도착했습니다</h1>
    </div>
    
    <div class="email-body">
      <div class="info-card">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">
              <i>👤</i> 이름
            </div>
            <div class="info-value">${name}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">
              <i>✉️</i> 이메일
            </div>
            <div class="info-value">
              <a href="mailto:${email}" style="color: #4361ee; text-decoration: none;">${email}</a>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-label">
              <i>🏢</i> 회사명
            </div>
            <div class="info-value">${company || "없음"}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">
              <i>📞</i> 전화번호
            </div>
            <div class="info-value">${phone || "없음"}</div>
          </div>
        </div>
      </div>
      
      <div class="message-container">
        <div class="message-label">
          <i>💬</i> 문의 내용
        </div>
        <div class="message-content">${(message as string).replace(
          /(<([^>]+)>)/gi,
          ""
        )}</div>
      </div>
    </div>
    
    <div class="email-footer">
      <p>© ${new Date().getFullYear()} COMPANY. All Rights Reserved.</p>
      <div class="footer-links">
        <a href="#">홈페이지</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">고객센터</a>
      </div>
    </div>
  </div>
</body>
</html>
`;
