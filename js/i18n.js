// List of available locales
const availableLocales = ["en", "vi"];

// Default locale.
const defaultLanguage = "en";

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (
  window.navigator.userLanguage || window.navigator.language
).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get("lang");
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl;
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {
  // EN
  en: {
    // navbar
    navbar: {
      easyApp: "EASY APP",
      products: "PRODUCTS",
      projects: "PROJECTS",
      faqs: "FAQs",
      language: "LANGUAGE",
    },
    // Banner Section
    banner: {
      shortTitle: "Together, a better life",
      mainTitle: "Meet Sino,<br/>Fulfill Your Dreams",
    },
    Left: {
      title: "Frequently asked general",
      underline: "questions",
      Product: "Product",
      Steps: "Steps",
      Support: "Support",
    },
    // Right side Product Steps Support
    RightProduct: {
      Q1: "1. What is an Online Personal Loan?",
      A1: "It's an unsecured loan offered through the Easy App by Bank SinoPac, following the bank's policies and Vietnamese banking regulations.",
      Q2: "2. What documents do I need for the loan application?",
      A2: "Valid ID, active mobile phone number, and financial documents (e.g., salary statements from the last 3 months, labor contract, etc.).",
      Q3: "3. What is the maximum loan amount I can apply for?",
      A3: "You can borrow up to 500 million VND per loan.",
      Q4: "4. Do I need a guarantor or collateral?",
      A4: "No, this is an unsecured loan, so no guarantor or collateral is required.",
      Q5: "5. How is the monthly repayment calculated, and how do I pay?",
      A5: "Equal monthly installments based on the reducing balance. Payments are automatically deducted from your demand account each month.",
      Q6: "6. What is the maximum loan duration?",
      A6: "You can select a loan tenor of up to 48 months.",
      Q7: "7. What happens if I miss a payment?",
      A7: "Late payments are reported to the Credit Information Center (CIC) and may incur additional interest based on the credit agreement.",
      Q8: "8. How will the bank remind me to make repayments?",
      A8: "SMS reminders will be sent before your repayment is due. Ensure you have enough funds in your SinoPac account before the due date.",
      Q9: "9. When will I receive the loan approval notification?",
      A9: "Bank SinoPac will send an SMS immediately after your loan is approved.",
      Q10: "10. How long will it take to receive the loan?",
      A10: "The loan amount will be credited to your account within 1-2 working days after approval.",
      Q11: "11. Can I pay off my loan early?",
      A11: "Yes, you can repay your loan early, but there may be fees based on your credit agreement.",
      Q12: "12. What happens after I finish paying off the loan?",
      A12: "Your loan account will be closed, and a final statement will be issued.",
      Q13: "13. Are there any penalties for early or missed payments?",
      A13: "Late or missed payments may incur additional fees. Early repayment fees depend on your loan agreement.",
      Q14: "14. Can I apply for a second loan while repaying my first loan?",
      A14: "Your eligibility for a second loan depends on your current credit standing and repayment history.",
      Q15: "15. Can I change my monthly installment date?",
      A15: "Contact the bank for support. Changes are possible under certain conditions.",
      Q16: "16. Can I apply for this loan if I have loans with other banks?",
      A16: "Yes, but your application will be assessed based on your credit history and debt levels.",
      Q17: "17. How will I receive the loan contract?",
      A17: "Bank SinoPac will send the contract to your registered email. The file will be encrypted with a password (your ID number).",
    },
    RightSteps: {
      Column1: "Loan Application",
      Step1: "Download and Register",
      Step11: "Download the Easy App, register with personal information, and verify your identity.",
      Step2: "Complete Account Setup",
      Step22: "Review information, and set password.",
      Step3: "Access Loan Application",
      Step33: "Login to the Easy app, and select Online Loan Application",
      Step4: "Review Loan Details",
      Step44: "Check interest rate, loan amount, and tenor.",
      Step5: "Provide Loan Details",
      Step55: "Choose the amount, and tenor, verify identity, and agree to terms.",
      Step6: "Submit Application",
      Step66: "Provide additional info and documents, and submit an application.",
      Column2: "Loan Disbursement",
      Step7: "Receive Approval Notification",
      Step77: "Get an SMS with a contract link.",
      Step8: "Register for Digital Certificate",
      Step88: "Register a CA, verify your ID, and complete a video.",
      Step9: "Sign Loan Contract",
      Step99: "Log in to the Easy app, review the contract, and sign with your PIN.",
      Step10: "Loan Disbursement",
      Step1010: "Receive confirmation of disbursement via registered SMS an email.",
    },
    RightSupport: {  
      title1: "Get in touch with us.",
      title2: "We'd love to hear from you. Here's how you can reach us...",
      title3: "Email us:",
    },
    RightFooter: {
      first: "Follow Us",
      second: "Contact Us",
    },
  },

  // VI
  vi: {
    // navbar
    navbar: {
      easyApp: "EASY APP",
      products: "GIỚI THIỆU",
      projects: "SẢN PHẨM",
      faqs: "CÂU HỎI",
      language: "NGÔN NGỮ",
    },
    // Banner Section
    banner: {
      shortTitle: "Together, a better life",
      mainTitle: "Hẹn Sino,<br/>Vẹn Ước Mơ",
    },
    projects: {
      title: "SẢN PHẨM",
      name1: "KHOẢN VAY DU LỊCH",
      subname1: "Đi xa hơn,<br/>Yêu thương gần hơn",      
      name2: "KHOẢN VAY GIÁO VIÊN",
      subname2: "Dựng xây tri thức<br/>kiến tạo tương lai",
      name3: "KHOẢN VAY NỘI THẤT", 
      subname3: "Thiết kế không gian<br/>Thiết lập phong cách",
      name4: "KHOẢN VAY TRẢI NGHIỆM",
      subname4: "Hướng bên ngoài<br/>Sáng bên trong",
      name5: "KHOẢN VAY DU HỌC",
      subname5: "Vay học vấn<br/>Gặt tương lai",
      name6: "KHOẢN VAY TUỔI TRẺ",
      subname6: "Khai tuổi trẻ<br/>Nghiệm ước mơ",
    },
    details: {
      "banner1": "Chuyến đi không chỉ của riêng bạn – đó là chuyến du lịch cùng gia đình.",
      "title1": "KHOẢN VAY DU LỊCH",
      "featureHead1": "Easy App -Thao tác đơn giản liền tay qua, du lịch gia đình đến ngay!",
      "featureContent1": "Vay tiêu dùng nhanh chóng từ Sinopac, hưởng ngay ưu đãi đặc biệt từ các đối tác hàng không, khách sạn. Thủ tục đơn giản, lãi suất hấp dẫn, giải ngân qua app tiện lợi.",
      "testimonial1": "\"Sinopac giúp tôi tận hưởng trọn vẹn chuyến du lịch gia đình không lo toan những kỷ niệm đáng nhớ bên nhau.\"",
      "ctaHead1": "Cùng Sinopac tạo kỷ niệm du lịch gia đình!",
      "cta": "Đăng ký ngay!",

      // Teacher Loan (2)
      "banner2": "An tâm thực hiện ước mơ với gói vay ưu đãi cho giáo viên",
      "title2": "KHOẢN VAY GIÁO VIÊN",
      "featureHead2": "Đầu tư tương lai, nâng tầm tri thức cùng Sinopac.",
      "featureContent2": "Vay ưu đãi cho giáo viên, dễ dàng tiếp cận khóa học, hội thảo.\
       Hồ sơ vay tín chấp đơn giản, giải ngân nhanh qua Easy app. \
       Liên hệ ngay để được tư vấn!",
      "testimonial2": "\"Khoản vay ưu đãi cho giáo viên giúp chúng tôi phát triển và đóng góp vào sứ mệnh quốc gia, mang đến cơ hội học tập tốt hơn cho học sinh khắp Việt Nam.\"",
      "ctaHead2": "Đồng hành cùng thầy cô, chắp cánh ước mơ tri thức!",

      // Interior Loan (3)
      "banner3": "Sống trong không gian sang trọng với gói vay thiết kế nội thất ưu đãi",
      "title3": "KHOẢN VAY NỘI THẤT",
      "featureHead3": "Mỗi món đồ nội thất đều chứa đựng một câu chuyện riêng. Hãy để SinoPac giúp bạn viết tiếp câu chuyện của chính mình.",
      "featureContent3": "Viết tiếp câu chuyện của ngôi nhà bạn với gói vay mua nội thất SinoPac. Lãi suất cạnh tranh, thủ tục đơn giản, giúp bạn sở hữu không gian sống đẳng cấp.",
      "testimonial3": "\"Ước vọng về một chốn an cư lý tưởng đã thành sự thật nhờ Sinopac với vay tín chấp nhanh để mua nội thất, những món đồ nội thất thủ công không chỉ là vật trang trí, mà còn là bức họa sống động về tâm hồn chúng tôi.\"",
      "ctaHead3": "Bắt đầu xây dựng những phong cách thiết kế nội thất đặc trưng cùng Easy App",

      // Experience Loan (4)
      "banner4": "Khám phá thế giới rộng lớn đang chờ bạn – Hãy bắt đầu cùng SinoPac",
      "title4": "KHOẢN VAY TRẢI NGHIỆM",
      "featureHead4": "Vay tiền du lịch dễ dàng, khám phá mọi điều kỳ diệu",
      "featureContent4": "SinoPac giúp bạn thỏa sức khám phá với gói vay ưu đãi đặc biệt. Lãi suất thấp, thủ tục đơn giản, biến chuyến đi trong mơ của bạn thành hiện thực.",
      "testimonial4": "\"Sinopac đã mở cánh cửa đến những chân trời mới. Với khoản vay tín chấp du lịch, chúng tôi đã thực hiện được ước mơ viễn du, tự do khám phá thế giới.\"",
      "ctaHead4": "Linh hoạt tài chính, thỏa sức khám phá thế giới",

      // Study Loan (5)
      "banner5": "Hành trình của bạn, chúng tôi đồng hành: Vay du học ngay hôm nay!",
      "title5": "KHOẢN VAY DU HỌC",
      "featureHead5": "Nâng Cao Trình Độ – Phát Triển Bản Thân - Hỗ Trợ Tương Lai",
      "featureContent5": "SinoPac đồng hành cùng bạn du học với những gói vay ưu đãi, thủ tục nhanh chóng, giúp bạn thực hiện ước mơ học vấn một cách dễ dàng.",
      "testimonial5": "\"Chỉ với vài phút đăng ký vay tín chấp ngân hàng, tôi đã có thể bắt đầu hành trình học tập của mình\"",
      "ctaHead5": "Tải Ứng Dụng – Vay Học Vấn",

      // Youth Loan (6)
      "banner6": "Khơi dậy đam mê, chinh phục ước mơ - Tuổi trẻ để sống trọn vẹn cùng SinoPac!",
      "title6": "KHOẢN VAY TUỔI TRẺ",
      "featureHead6": "Tỏa sáng với bản ngã của chính mình cùng SinoPac!",
      "featureContent6": "Sinopac: Người bạn đồng hành với ước mơ của tuổi trẻ. Với các gói vay ưu đãi và thủ tục đơn giản, Sinopac giúp bạn tự tin thực hiện mọi kế hoạch khám phá đam mê.",
      "testimonial6": "\"Vay Sinopac – Sành điệu, không lo chi phí. Quản lý tài chính dễ dàng, tận hưởng cuộc sống.\"",
      "ctaHead6": "Thỏa đam mê tuổi trẻ, chẳng cần lo nghĩ"
    },

    // Add Easy App section
    easyApp: {
      GlobalFinancialManagement: "Quản lý tài chính toàn cầu",
      OnlinePersonalLoan: "Vay vốn tín dụng online",
      QuickAndSecureLogin: "Đăng nhập nhanh chóng an toàn",
      HighestLevelOfSecurity: "Bảo mật tối đa",
      DownloadApp: "Tải Easy App ngay để trải nghiệm!"
    },

    // Add Product section
    product: {
      DigitalMicroloans: "VAY TRỰC TUYẾN",
      Experience: "Vay trực tuyến thông minh, mọi lúc mọi nơi.",
      WhyChooseUs: "VỀ CHÚNG TÔI",
      script: "Sinopac Bank mang đến giải pháp vay vốn linh hoạt, cùng thủ tục đơn giản.<br/>Chỉ cần vài cú click, bạn có thể quản lý tài chính một cách tối ưu.",
      ApplyNow: "ĐĂNG KÝ NGAY",
      Details: "CHI TIẾT"
    },
    Left: {
      title: "CÂU HỎI",
      underline: "THƯỜNG GẶP",
      Product: "GIỚI THIỆU",
      Steps: "HƯỚNG DẪN",
      Support: "HỖ TRỢ",
    },
    // Right side Product Steps Support
    RightProduct: {
      Q1: "1. Vay tiêu dùng cá nhân trực tuyến là gì?",
      A1: "Đây là khoản vay tín chấp được cung cấp thông qua ứng dụng Easy App của Ngân hàng SinoPac, theo chính sách của ngân hàng và quy định ngân hàng Việt Nam.",
      Q2: "2. Ngân hàng cần những hồ sơ như thế nào để có thể đáp ứng hồ sơ vay vốn?",
      A2: "Chứng minh nhân dân hoặc Thẻ căn cước công dân còn hiệu lực, số điện thoại di động, các tài liệu chứng minh tài chính liên quan (chứng minh thu nhập 3 tháng gần nhất, hợp đồng lao động còn kỳ hạn,...).",
      Q3: "3. Hạn mức tối đa mà tôi có thể vay là bao nhiêu?",
      A3: "Hạn mức tối đa mà Ngân hàng có thể đáp ứng là 500 triệu VND với mỗi khoản vay.",
      Q4: "4. Với khoản vay này, tôi có cần người bảo lãnh hay tài sản thế chấp không?",
      A4: "Đây là khoản vay tín chấp, nên Quý khách hàng sẽ không cần người bảo lãnh hoặc tài sản thế chấp.",
      Q5: "5. Phương thức nào để tính số tiền phải trả hàng tháng, và thanh toán khoản vay theo hình thức như thế nào?",
      A5: "Trả góp hàng tháng bằng số tiền cố định dựa trên số dư giảm dần. Số tiền trả góp sẽ được tự động trừ vào tài khoản thanh toán của Quý khách hàng hàng tháng.",
      Q6: "6. Thời hạn vay tối đa là bao nhiêu?",
      A6: "Quý khách hàng có thể lựa chọn thời hạn vay vốn lên đến 48 tháng.",
      Q7: "7. Nếu tôi bị trễ khoản thanh toán, tôi sẽ phải xử llý như thế nào?",
      A7: "Các khoản thanh toán trễ sẽ được báo cáo cho Trung tâm Thông tin Tín dụng (CIC). Ngoài ra, các khoản vay quá hạn có thể phải chịu lãi suất bổ sung dựa trên thỏa thuận tín dụng.",
      Q8: "8. Ngân hàng có gửi thông báo đến khách hàng khi đến hạn thanh toán không?",
      A8: "Quý khách hàng sẽ nhận được thông báo trước khi khoản thanh toán đến hạn. Vui lòng đảm bảo tài khoản SinoPac của Quý khách hàng có đủ tiền trước ngày đến hạn. Nếu Quý khách hàng thanh toán thông qua ngân hàng khác, các khoản chuyển khoản thực hiện sau 4 giờ chiều hoặc vào các ngày không làm việc sẽ được xử lý vào ngày làm việc tiếp theo. Để tránh chậm trễ, Quý khách hàng vui lòng chuyển khoản trước 1-2 ngày.",
      Q9: "9. Khi nào thì tôi có thể nhận được thông báo phê duyệt khoản vay?",
      A9: "Ngân hàng SinoPac sẽ gửi tin nhắn SMS ngay sau khi khoản vay của Quý khách được phê duyệt.",
      Q10: "10. Tôi có thể đăng ký thêm khoản vay nếu đang có một khoản vay hiện tại không?",
      A10: "Quý khách có thể đăng ký thêm khoản vay dựa trên nhu cầu và năng lực tài chính của bản thân.",
      Q11: "11. Nếu điều khoản vay của ngân hàng không được thỏa mãn, tôi có thể từ chối khoản vay không?",
      A11: "Quý khách hàng có thể từ chối đề nghị vay qua ứng dụng Easy App hoặc liên hệ Chi nhánh TP.HCM của Ngân hàng SinoPac để được hỗ trợ.",
      Q12: "12. Tôi có cần đến chi nhánh để ký hợp đồng vay không?",
      A12: "Quý khách hàng hoàn toàn có thể xử lý hợp đồng trực tuyến qua ứng dụng Easy App.",
      Q13: "13. Chứng thực điện tử có cần thiết khi đăng ký khoản vay không?",
      A13: "Chứng thực điện tử là cần thiết để ký hợp đồng vay trực tuyến một cách an toàn qua Easy App.",
      Q14: "14. Chứng thực điện tử có thời hạn trong bao lâu?",
      A14: "Chứng thực điện tử chỉ có hiệu lực trong 24 giờ và chỉ được sử dụng để ký hợp đồng vay vốn tín chấp với Ngân hàng SinoPac.",
      Q15: "15. Nếu tôi thay đổi quyết định sau khi từ chối đề nghị vay vốn thì sao?",
      A15: "Đại diện từ phía ngân hàng SinoPac sẽ liên hệ với Quý khách hàng để xác nhận lại quyết định của quý vị. Nếu muốn tiếp tục, Quý khách hàng có thể thông báo với phía ngân hàng để kích hoạt lại khoản vay.",
      Q16: "16. Nếu tôi không mở tài khoản giao dịch sau khi đồng ý với khoản vay thì sao?",
      A16: "Nếu Quý khách hàng không mở tài khoản giao dịch trong vòng 7 ngày, khoản vay sẽ bị hủy và Quý khách hàng cần phải đăng ký lại.",
      Q17: "17. Phương thức nhận hợp đồng vay như thế nào?",
      A17: "Ngân hàng SinoPac sẽ gửi hợp đồng đến địa chỉ email đã đăng ký của Quý khách hàng. Tệp tin sẽ được mã hóa bằng mật kkhẩu ( số CMND/CCCD của Quý khách hàng).",
    },
    RightSteps: {
      Column1: "Đăng ký vay vốn",
      Step1: "Tải xuống và Đăng ký",
      Step11: "Tải ứng dụng Easy App, đăng ký tài khoản và xác minh thông tin cá nhân.",
      Step2: "Hoàn tất thiết lập tài khoản",
      Step22: "Kiểm tra lại thông tin, và thiết lập mật khẩu an toàn.",
      Step3: "Truy cập Easy App",
      Step33: "Đăng nhập tài khoản, chọn Vay Online",
      Step4: "Xem xét chi tiết khoản vay",
      Step44: "Kiểm tra thông tin như lãi suất, số tiền, và kỳ hạn.",
      Step5: "Điền thông tin khoản vay",
      Step55: "Chọn số tiền và kỳ hạn vay, xác minh danh tính, đồng ý với các điều khoản vay.",
      Step6: "Nộp hồ sơ",
      Step66: "Cung cấp đầy đủ giấy tờ theo yêu cầu, nhấn gửi để hoàn tất đăng ký",
      Column2: "Giải ngân vốn vay",
      Step7: "Nhận Thông Báo Duyệt",
      Step77: "Nhận thông báo qua SMS về việc phê duyệt khoản vay và liên kết hợp đồng.",
      Step8: "Đăng Ký Chứng Thư Số",
      Step88: "Đăng ký tài khoản Cơ quan chứng nhận điện tử (CA), xác thực danh tính.",
      Step9: "Ký Hợp Đồng Vay",
      Step99: "Xác nhận và ký hợp đồng điện tử bằng mã PIN.",
      Step10: "Giải Ngân Vay",
      Step1010: "Nhận thông báo về việc giải ngân khoản vay thành công qua SMS và email.",
    },
    RightSupport: {  
      title1: "Liên hệ với chúng tôi.",
      title2: "Rất mong nhận được phản hồi từ bạn. Bạn có thể liên hệ với chúng tôi qua...",
      title3: "Email:",
    },
    RightFooter: {
      first: "THEO DÕI",
      second: "LIÊN HỆ VỚI CHÚNG TÔI",
      third: "Điện thoại",
      fourth: "Lầu 9, Tòa nhà Friendship, Đường Lê Duẩn, Quận 1, Thành phố HCM",
    },
  }
};

// Get all page elements to be translated.
const elements = document.querySelectorAll("[data-i18n]");

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute("data-i18n");
  let text = key.split(".").reduce((obj, i) => (obj ? obj[i] : null), json);

  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {
    // Iterate each variable in the text.
    variables.forEach((variable) => {
      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(
              `${variable}`,
              new Function(`return (${value})`)()
            );
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      });
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});

// Set <html> tag lang attribute.
const htmlElement = document.querySelector("html");
htmlElement.setAttribute("lang", pageLanguage);

function switchLanguage(lang) {
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.location.href = url.toString(); // Reload page with new lang parameter
}
