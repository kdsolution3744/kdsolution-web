export const getEmailHtml = (
  name: string,
  email: string,
  company: string,
  phone: string,
  message: string
) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>새로운 문의 알림</title>
</head>
<body style="margin:0; padding:0; background-color:#f7f9fc; font-family: Arial, sans-serif;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f7f9fc">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <!-- 컨테이너 -->
        <table width="100%" max-width="650" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border-radius:12px; overflow:hidden; box-shadow:0 5px 20px rgba(0,0,0,0.08);">
          <!-- 헤더 -->
          <tr>
            <td bgcolor="#4361ee" style="padding:30px 40px; text-align:center; background: linear-gradient(135deg, #4361ee, #3a0ca3);">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="color:#ffffff; font-size:28px; font-weight:700; letter-spacing:1px; padding-bottom:10px;">
                    KD Solution
                  </td>
                </tr>
                <tr>
                  <td style="color:#ffffff; font-size:24px; font-weight:600; padding:20px 0 10px;">
                    새로운 문의가 도착했습니다
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- 본문 -->
          <tr>
            <td style="padding:40px;">
              <!-- 정보 카드 -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f8f9ff" style="border-radius:10px; margin-bottom:30px;">
                <tr>
                  <td style="padding:25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <!-- 이름 -->
                            <tr>
                              <td width="50%" style="padding-bottom:15px;">
                                <div style="font-size:14px; font-weight:600; color:#5a67d8; margin-bottom:6px;">👤 이름</div>
                                <div style="font-size:16px; color:#2d3748; font-weight:500; padding-left:24px;">${name}</div>
                              </td>
                              <!-- 이메일 -->
                              <td width="50%" style="padding-bottom:15px;">
                                <div style="font-size:14px; font-weight:600; color:#5a67d8; margin-bottom:6px;">✉️ 이메일</div>
                                <div style="font-size:16px; color:#2d3748; font-weight:500; padding-left:24px;">
                                  <a href="mailto:${email}" style="color:#4361ee; text-decoration:none;">${email}</a>
                                </div>
                              </td>
                            </tr>
                            <!-- 회사명 -->
                            <tr>
                              <td width="50%" style="padding-bottom:15px;">
                                <div style="font-size:14px; font-weight:600; color:#5a67d8; margin-bottom:6px;">🏢 회사명</div>
                                <div style="font-size:16px; color:#2d3748; font-weight:500; padding-left:24px;">${
                                  company || "없음"
                                }</div>
                              </td>
                              <!-- 전화번호 -->
                              <td width="50%" style="padding-bottom:15px;">
                                <div style="font-size:14px; font-weight:600; color:#5a67d8; margin-bottom:6px;">📞 전화번호</div>
                                <div style="font-size:16px; color:#2d3748; font-weight:500; padding-left:24px;">${
                                  phone || "없음"
                                }</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- 문의 내용 -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f8f9ff" style="border-radius:10px;">
                <tr>
                  <td style="padding:25px;">
                    <div style="font-size:16px; font-weight:600; color:#5a67d8; margin-bottom:15px;">💬 문의 내용</div>
                    <div style="background:white; border-radius:8px; padding:20px; line-height:1.7; color:#4a5568; font-size:15px; white-space:pre-line;">
                      ${(message as string).replace(/(<([^>]+)>)/gi, "")}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- 푸터 -->
          <tr>
            <td bgcolor="#f0f4ff" style="text-align:center; padding:25px 40px; color:#718096; font-size:14px;">
              <div>© ${new Date().getFullYear()} KD Solution. All Rights Reserved.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
