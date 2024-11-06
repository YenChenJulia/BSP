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
      title: "KHOẢN VAY",
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
    }
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
