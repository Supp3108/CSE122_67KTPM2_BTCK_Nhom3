// ========================================================
// TRACUUCHITIET.JS - DỮ LIỆU & LOGIC TRANG CHI TIẾT BỆNH
// ========================================================

const DISEASES_DATA = {
  dada: {
    id: "dada",
    dept: "Khoa Tiêu Hóa - Nội Soi",
    title: "Bệnh Dạ Dày & Khám Nội Soi Tiêu Hóa",
    desc: "Cẩm nang hướng dẫn chuẩn bị hành trang, quy định nhịn ăn nghiêm ngặt và các lưu ý an toàn trước khi đi khám bệnh lý dạ dày hoặc thực hiện nội soi tiêu hóa.",
    symptoms: [
      "Đau tức, nóng rát hoặc cồn cào vùng thượng vị (khu vực trên rốn), đau tăng sau ăn hoặc khi quá đói",
      "Ợ chua, ợ hơi liên tục, cảm giác trào ngược thức ăn hoặc dịch vị chua cay lên cổ họng",
      "Đầy bụng, chướng hơi, ăn mau no, khó tiêu ngay cả khi ăn lượng thức ăn rất ít",
      "Buồn nôn, nôn khan vào buổi sáng, chán ăn, sụt cân không rõ nguyên nhân",
      "Đi ngoài phân đen như bã cà phê hoặc nôn ra máu (đây là dấu hiệu xuất huyết tiêu hóa, cần cấp cứu ngay)"
    ],
    notes: [
      {
        type: "danger",
        icon: "fa-triangle-exclamation",
        title: "Bắt buộc nhịn ăn tuyệt đối:",
        content: "Nhịn ăn ít nhất 6 - 8 tiếng trước khi khám/nội soi. Tuyệt đối không ăn sáng, không uống sữa, nước ngọt, cà phê, trà hay nước có màu đỏ/cam vì sẽ bám vào niêm mạc làm che khuất camera nội soi."
      },
      {
        type: "warning",
        icon: "fa-glass-water",
        title: "Lưu ý về nước uống:",
        content: "Chỉ được uống một lượng nhỏ nước lọc tinh khiết (dưới 100ml) nếu quá khát, và phải ngừng uống nước hoàn toàn trước giờ nội soi ít nhất 2 tiếng để tránh trào ngược sặc phổi."
      },
      {
        type: "info",
        icon: "fa-pills",
        title: "Thuốc đang sử dụng:",
        content: "Nếu đang uống thuốc chống đông máu, thuốc huyết áp, tim mạch hay tiểu đường, cần mang theo đơn thuốc và hỏi ý kiến bác sĩ trước khi ngưng thuốc."
      },
      {
        type: "info",
        icon: "fa-user-group",
        title: "Bắt buộc đi cùng người thân (Nếu nội soi gây mê):",
        content: "Nếu chọn nội soi không đau (tiền mê), bắt buộc phải có người nhà đi cùng để ký giấy đồng thuận và đưa về an toàn vì thuốc mê có thể gây choáng váng trong vài giờ."
      }
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip bản gốc",
        "Thẻ BHYT bản cứng hoặc ứng dụng VssID trên điện thoại",
        "Giấy chuyển tuyến khám chữa bệnh BHYT (nếu có)",
        "Sổ khám bệnh và đơn thuốc dạ dày đang uống gần đây",
        "Kết quả nội soi, xét nghiệm vi khuẩn HP, phim chụp X-quang cũ (nếu có)"
      ],
      prep: [
        "Mặc trang phục rộng rãi, thoáng mát, dễ cởi hoặc vén áo để siêu âm",
        "Chuẩn bị áo ấm nhẹ hoặc khăn choàng vì phòng nội soi thường lạnh",
        "Mang theo khẩu trang y tế và khăn giấy khô / khăn ướt",
        "Mang theo bánh mì mềm hoặc sữa chua để ăn nhẹ SAU KHI nội soi xong và có sự đồng ý của bác sĩ",
        "Chuẩn bị tiền mặt hoặc thẻ ngân hàng để thanh toán viện phí, tạm ứng nội soi"
      ],
      questions: [
        "Tôi có cần thực hiện nội soi gây mê hay nội soi thường qua đường mũi/họng?",
        "Tình trạng của tôi có cần làm xét nghiệm tìm vi khuẩn HP (Helicobacter pylori) không?",
        "Tôi có phải dừng các loại thuốc dạ dày đang uống ở nhà không?",
        "Chế độ ăn uống kiêng khem và sinh hoạt hàng ngày tôi cần tuân thủ như thế nào?"
      ]
    }
  },

  tongquat: {
    id: "tongquat",
    dept: "Khoa Khám Bệnh Tổng Quát",
    title: "Khám Sức Khỏe Tổng Quát & Xét Nghiệm Định Kỳ",
    desc: "Hướng dẫn chuẩn bị đầy đủ hành trang, quy định nhịn ăn lấy máu xét nghiệm, siêu âm và những lưu ý để kết quả kiểm tra sức khỏe tổng quát đạt độ chính xác cao nhất.",
    symptoms: [
      "Kiểm tra sức khỏe định kỳ 6 tháng hoặc 1 năm/lần cho bản thân và gia đình",
      "Cảm giác cơ thể thường xuyên mệt mỏi, uể oải, mất ngủ hoặc sụt cân nhẹ",
      "Muốn tầm soát các chỉ số gan, thận, đường huyết, mỡ máu, acid uric (gout)",
      "Tầm soát sớm các bệnh lý tim mạch, huyết áp, tuyến giáp và ung thư tiềm ẩn",
      "Làm hồ sơ sức khỏe đi học, đi làm, kết hôn hoặc kiểm tra trước khi mang thai"
    ],
    notes: [
      {
        type: "danger",
        icon: "fa-droplet",
        title: "Nhịn ăn sáng để lấy máu xét nghiệm:",
        content: "Cần nhịn ăn từ 8 - 10 tiếng trước khi lấy máu (tốt nhất là nhịn qua đêm). Bữa tối hôm trước nên ăn thanh đạm, tránh rượu bia, đồ ngọt, đồ nhiều dầu mỡ."
      },
      {
        type: "warning",
        icon: "fa-person-booth",
        title: "Uống nước & nhịn tiểu trước khi siêu âm bụng:",
        content: "Uống khoảng 500ml nước lọc và nhịn tiểu trước khi siêu âm 1 tiếng để bàng quang căng đầy, giúp bác sĩ quan sát rõ tử cung, buồng trứng hoặc tiền liệt tuyến."
      },
      {
        type: "info",
        icon: "fa-vial",
        title: "Lấy mẫu nước tiểu đúng cách:",
        content: "Vệ sinh sạch bộ phận sinh dục ngoài, bỏ dòng nước tiểu đầu và lấy phần nước tiểu giữa dòng vào ống nghiệm để tránh tạp khuẩn."
      },
      {
        type: "info",
        icon: "fa-venus",
        title: "Lưu ý dành cho phụ nữ:",
        content: "Không khám phụ khoa hay làm xét nghiệm nước tiểu khi đang trong chu kỳ kinh nguyệt (nên chờ sạch kinh 3 - 5 ngày). Không chụp X-quang nếu nghi ngờ đang có thai."
      }
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip",
        "Thẻ BHYT hoặc Thẻ bảo lãnh bảo hiểm sức khỏe tư nhân",
        "Hồ sơ khám sức khỏe tổng quát các năm trước (để so sánh sự biến động các chỉ số)",
        "Danh sách các loại thuốc hoặc thực phẩm chức năng đang dùng hàng ngày"
      ],
      prep: [
        "Mặc trang phục 2 mảnh rời (áo rời, quần rời), chất vải mỏng nhẹ thoải mái",
        "Không đeo đồ trang sức kim loại quý giá để tiện khi chụp X-quang, đo điện tim",
        "Mang theo kính cận/viễn đang đeo (không đeo kính áp tròng) để kiểm tra thị lực",
        "Chuẩn bị đồ ăn nhẹ (sữa, bánh quy) trong túi để ăn bù ngay sau khi lấy máu xét nghiệm xong",
        "Chuẩn bị kinh phí dự trù cho các gói xét nghiệm chuyên sâu hoặc tầm soát phát sinh"
      ],
      questions: [
        "Các chỉ số mỡ máu, men gan, chức năng thận và đường huyết của tôi có trong ngưỡng an toàn?",
        "Với tiền sử gia đình và lối sống hiện tại, tôi có cần làm thêm xét nghiệm tầm soát chuyên sâu nào không?",
        "Tôi có cần tiêm nhắc lại các loại vaccine phòng bệnh nào ở độ tuổi này không?",
        "Bác sĩ có lời khuyên gì về chế độ ăn uống và cường độ luyện tập thể chất cho tôi?"
      ]
    }
  },

  nhi: {
    id: "nhi",
    dept: "Khoa Nhi",
    title: "Khám Nhi Khoa (Trẻ Em Sốt, Ho, Tiêu Chảy & Hô Hấp)",
    desc: "Cẩm nang hướng dẫn cha mẹ chuẩn bị giấy tờ, đồ dùng cần thiết và cách theo dõi triệu chứng chuẩn xác trước khi đưa bé đi khám tại bệnh viện.",
    symptoms: [
      "Bé bị sốt cao liên tục, sốt không hạ sau khi dùng thuốc hoặc sốt kèm co giật",
      "Ho đờm, thở khò khè, thở rít, thở nhanh hoặc có dấu hiệu rút lõm lồng ngực",
      "Nôn trớ nhiều lần trong ngày, không bú được hoặc bỏ ăn, bỏ uống",
      "Đi ngoài phân lỏng, phân có nhầy máu hoặc đi tiêu nhiều lần dẫn đến mất nước",
      "Phát ban, nổi mẩn đỏ, quấy khóc bất thường, li bì, khó đánh thức"
    ],
    notes: [
      {
        type: "danger",
        icon: "fa-temperature-arrow-up",
        title: "Ghi chép chính xác lịch sử cơn sốt:",
        content: "Ghi nhớ nhiệt độ cao nhất của bé, thời điểm sốt, loại thuốc hạ sốt đã dùng (Paracetamol hay Ibuprofen), liều lượng (mg/kg) và khoảng cách giữa các lần uống."
      },
      {
        type: "warning",
        icon: "fa-camera",
        title: "Chụp ảnh / Quay video triệu chứng của bé:",
        content: "Nên quay lại video lúc bé thở rút lõm ngực, tiếng ho của bé, hoặc chụp ảnh phân, nốt phát ban để bác sĩ quan sát chuẩn xác nhất."
      },
      {
        type: "info",
        icon: "fa-utensils",
        title: "Ăn uống trước khi khám họng:",
        content: "Không nên cho bé ăn hoặc bú quá no ngay trước khi vào phòng khám, vì bác sĩ dùng que đè lưỡi kiểm tra họng rất dễ kích thích làm bé nôn trớ."
      },
      {
        type: "danger",
        icon: "fa-truck-medical",
        title: "Dấu hiệu cấp cứu cần đi ngay:",
        content: "Bé tím tái, thở rên, co giật, lơ mơ hoặc li bì khó đánh thức -> Đưa ngay vào khoa Cấp cứu, không cần chờ đợi đăng ký khám thường."
      }
    ],
    checklist: {
      docs: [
        "Bản sao Giấy khai sinh hoặc Thẻ BHYT của bé (trẻ dưới 6 tuổi)",
        "Sổ khám bệnh của bé và Sổ tiêm chủng vaccine từ sơ sinh",
        "Đơn thuốc hoặc vỏ các loại thuốc/siro bé đã uống trong 3 - 5 ngày gần nhất",
        "CCCD của bố hoặc mẹ đi cùng"
      ],
      prep: [
        "2 - 3 chiếc tã bỉm dự phòng, khăn sữa, khăn ướt",
        "Bình sữa, sữa công thức pha sẵn hoặc nước ấm cho bé",
        "1 - 2 bộ quần áo sơ cua mềm mại để thay nếu bé nôn trớ hay tè dầm",
        "Nhiệt kế điện tử mang theo để kiểm tra thân nhiệt bé khi ngồi chờ",
        "Đồ chơi nhỏ hoặc thú bông yêu thích để dỗ dành bé bớt sợ hãi",
        "Khẩu trang trẻ em và nước rửa tay khô diệt khuẩn"
      ],
      questions: [
        "Tình trạng của bé là do nhiễm virus hay vi khuẩn, có cần dùng kháng sinh không?",
        "Liều lượng và cách dùng thuốc hạ sốt an toàn nhất theo cân nặng hiện tại của bé?",
        "Những dấu hiệu cảnh báo trở nặng nào tại nhà bắt buộc phải đưa bé tái khám ngay?",
        "Chế độ dinh dưỡng và cách bù nước, điện giải (Oresol) cho bé như thế nào cho đúng?"
      ]
    }
  },

  timmach: {
    id: "timmach",
    dept: "Khoa Tim Mạch - Can Thiệp Tim Mạch",
    title: "Khám Tim Mạch, Tăng Huyết Áp & Rối Loạn Nhịp",
    desc: "Hướng dẫn bệnh nhân chuẩn bị nhật ký huyết áp, hồ sơ tim mạch cũ và các nguyên tắc cần tuân thủ trước khi đo điện tâm đồ, siêu âm tim.",
    symptoms: [
      "Đau tức vùng ngực trái, cảm giác đè nặng, bóp nghẹt lan lên cằm, vai hoặc cánh tay",
      "Cảm giác tim đập nhanh, dồn dập, hồi hộp trống ngực hoặc thỉnh thoảng bị 'hẫng' nhịp",
      "Khó thở, hụt hơi khi leo cầu thang, khi đi bộ gắng sức hoặc khó thở khi nằm phẳng",
      "Chỉ số huyết áp đo tại nhà thường xuyên cao trên 140/90 mmHg hoặc lên xuống thất thường",
      "Thường xuyên chóng mặt, xây xẩm mặt mày, choáng váng hoặc từng bị ngất xỉu"
    ],
    notes: [
      {
        type: "danger",
        icon: "fa-book-medical",
        title: "Ghi chép sổ theo dõi huyết áp tại nhà:",
        content: "Đo và ghi lại chỉ số huyết áp vào buổi sáng và buổi tối trong 3 - 5 ngày gần nhất để bác sĩ có căn cứ chẩn đoán chính xác."
      },
      {
        type: "warning",
        icon: "fa-ban",
        title: "Tránh xa chất kích thích trước khám:",
        content: "Tuyệt đối không uống cà phê, trà đặc, rượu bia, nước tăng lực và không hút thuốc lá ít nhất 4 tiếng trước khi đo huyết áp và đo điện tâm đồ (ECG)."
      },
      {
        type: "info",
        icon: "fa-capsules",
        title: "Uống thuốc huyết áp hàng ngày:",
        content: "Bệnh nhân tăng huyết áp VẪN UỐNG thuốc huyết áp định kỳ vào buổi sáng bình thường, trừ khi có chỉ định khác của bác sĩ tim mạch."
      },
      {
        type: "info",
        icon: "fa-couch",
        title: "Nghỉ ngơi ổn định trước khi đo:",
        content: "Nên đến bệnh viện sớm và ngồi nghỉ ngơi thư giãn tại chỗ ít nhất 15 phút trước khi vào phòng khám để chỉ số huyết áp không bị tăng do di chuyển."
      }
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip và Thẻ BHYT",
        "Sổ theo dõi bệnh mạn tính / tăng huyết áp",
        "Toàn bộ các đơn thuốc tim mạch đang sử dụng (mang theo cả vỏ hộp hoặc vỉ thuốc)",
        "Kết quả điện tâm đồ (ECG), siêu âm tim, phim chụp X-quang lồng ngực, đĩa chụp mạch vành cũ (nếu có)"
      ],
      prep: [
        "Mặc áo sơ mi rộng có khuy cài trước hoặc áo thun cộc tay để dễ dán điện cực đo điện tim và đo huyết áp",
        "Không nên mặc quần áo quá chật hoặc váy liền thân gây bất tiện khi gắn thiết bị đo Holter",
        "Mang theo chai nước lọc và sổ tay ghi chép lại các dặn dò của bác sĩ",
        "Đi cùng người thân nếu từng có tiền sử choáng ngất hoặc đau ngực dữ dội"
      ],
      questions: [
        "Chỉ số huyết áp mục tiêu tôi cần duy trì hàng ngày là bao nhiêu?",
        "Cơn đau tức ngực của tôi có nguy cơ dẫn đến nhồi máu cơ tim không?",
        "Tôi có cần thực hiện thêm nghiệm pháp gắng sức hoặc chụp mạch vành không?",
        "Chế độ ăn giảm muối, hạn chế mỡ động vật và các bài tập thể dục nào phù hợp với tim của tôi?"
      ]
    }
  },

  sanphukhoa: {
    id: "sanphukhoa",
    dept: "Khoa Sản - Phụ Khoa",
    title: "Khám Sản Phụ Khoa & Quản Lý Thai Kỳ Định Kỳ",
    desc: "Cẩm nang hướng dẫn chị em chuẩn bị tâm lý, vệ sinh đúng cách, hồ sơ thai sản và danh sách vật dụng cần thiết trước khi đi khám sản phụ khoa.",
    symptoms: [
      "Khám thai định kỳ theo từng mốc quan trọng (12 tuần, 22 tuần, 32 tuần...)",
      "Khí hư bất thường, có màu vàng, xanh, trắng đục vón cục, có mùi hôi hoặc ngứa rát",
      "Đau tức vùng bụng dưới, đau vùng chậu, đau khi quan hệ hoặc rối loạn chu kỳ kinh nguyệt",
      "Chảy máu âm đạo bất thường ngoài chu kỳ kinh hoặc sau khi quan hệ",
      "Khám sức khỏe tiền hôn nhân hoặc chuẩn bị kế hoạch mang thai"
    ],
    notes: [
      {
        type: "danger",
        icon: "fa-shower",
        title: "Không thụt rửa âm đạo trước khi khám:",
        content: "Chỉ rửa nhẹ nhàng vùng kín bằng nước sạch bên ngoài. Tuyệt đối không thụt rửa sâu trong âm đạo hay dùng dung dịch sát khuẩn mạnh trước khi khám 24 giờ vì sẽ làm sai lệch kết quả xét nghiệm dịch."
      },
      {
        type: "warning",
        icon: "fa-heart-circle-xmark",
        title: "Kiêng quan hệ tình dục:",
        content: "Cần kiêng quan hệ tình dục ít nhất 1 - 2 ngày trước khi khám phụ khoa hoặc làm xét nghiệm tầm soát ung thư cổ tử cung (Pap smear / HPV)."
      },
      {
        type: "info",
        icon: "fa-calendar-days",
        title: "Thời điểm đi khám thích hợp:",
        content: "Nên đi khám phụ khoa sau khi đã sạch kinh hoàn toàn từ 3 - 5 ngày. Không nên đi khám trong những ngày đang có kinh nguyệt."
      },
      {
        type: "info",
        icon: "fa-baby",
        title: "Lưu ý khi siêu âm thai:",
        content: "Thai nhỏ dưới 12 tuần làm siêu âm bụng cần uống nhiều nước và nhịn tiểu để bàng quang đẩy tử cung lên; với thai lớn hơn thì nên đi tiểu sạch trước khi siêu âm."
      }
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip và Thẻ BHYT",
        "Sổ khám thai định kỳ (nếu đang mang thai)",
        "Toàn bộ kết quả xét nghiệm máu, Double Test, Triple Test, NIPT và phiếu siêu âm các tuần trước",
        "Đơn thuốc sắt, canxi, acid folic hoặc thuốc đặt phụ khoa đang sử dụng"
      ],
      prep: [
        "Mặc váy liền suông rộng rãi hoặc quần ống rộng thoải mái để thuận tiện khi thăm khám phụ khoa",
        "Đi giày bệt hoặc dép quai hậu dễ tháo cởi, chống trơn trượt",
        "Mang theo khăn giấy khô, khăn ướt và băng vệ sinh hàng ngày dự phòng",
        "Chuẩn bị một cuốn sổ tay nhỏ hoặc ghi chú trong điện thoại các câu hỏi cần bác sĩ tư vấn"
      ],
      questions: [
        "Tình trạng viêm nhiễm của tôi có cần điều trị đồng thời cho bạn đời/chồng không?",
        "Với phụ nữ mang thai: Cân nặng, chiều dài và các chỉ số hình thái thai nhi có phát triển bình thường?",
        "Tôi có cần bổ sung thêm vi chất, tiêm vaccine uốn ván hoặc làm thêm sàng lọc dị tật nào không?",
        "Tôi cần kiêng cữ những thực phẩm, tư thế vận động hay thuốc men gì trong thời gian này?"
      ]
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Đọc tham số `id` từ URL (ví dụ: ?id=dada)
  const urlParams = new URLSearchParams(window.location.search);
  let diseaseId = urlParams.get("id");

  // Nếu không có hoặc sai, mặc định là 'dada'
  if (!diseaseId || !DISEASES_DATA[diseaseId]) {
    diseaseId = "dada";
  }

  // 2. Render thông tin bệnh ra trang
  renderDiseaseDetail(diseaseId);

  // 3. Xử lý các nút chuyển nhanh bệnh
  setupQuickSwitchButtons(diseaseId);

  // 4. Xử lý nút Đặt lại checklist
  const resetBtn = document.getElementById("resetChecklistBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll('.checklist-items input[type="checkbox"]');
      checkboxes.forEach((cb) => {
        cb.checked = false;
        cb.closest("li").classList.remove("completed");
      });
    });
  }

  // 5. Xử lý nút In / Tải danh sách
  const printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
});

// Hàm hiển thị toàn bộ nội dung bệnh
function renderDiseaseDetail(id) {
  const data = DISEASES_DATA[id];
  if (!data) return;

  // Cập nhật tiêu đề trang
  document.title = `${data.title} - CareRoute`;

  // Breadcrumb
  const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.title;

  // Header Banner
  const deptEl = document.getElementById("diseaseDept");
  const titleEl = document.getElementById("diseaseTitle");
  const descEl = document.getElementById("diseaseDesc");
  if (deptEl) deptEl.textContent = data.dept;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;

  // 1. Render Triệu chứng
  const symptomsList = document.getElementById("symptomsList");
  if (symptomsList) {
    symptomsList.innerHTML = data.symptoms
      .map(
        (s) => `
        <li>
          <i class="fa-solid fa-circle-check"></i>
          <span>${s}</span>
        </li>
      `
      )
      .join("");
  }

  // 2. Render Lưu ý quan trọng
  const notesGrid = document.getElementById("notesGrid");
  if (notesGrid) {
    notesGrid.innerHTML = data.notes
      .map(
        (n) => `
        <div class="note-card ${n.type}">
          <div class="note-header">
            <i class="fa-solid ${n.icon}"></i>
            <span>${n.title}</span>
          </div>
          <p>${n.content}</p>
        </div>
      `
      )
      .join("");
  }

  // 3. Render Checklist
  renderChecklistGroup("docsList", data.checklist.docs);
  renderChecklistGroup("prepList", data.checklist.prep);
  renderChecklistGroup("questionsList", data.checklist.questions);
}

// Render từng nhóm checklist kèm ô checkbox tương tác
function renderChecklistGroup(elementId, items) {
  const container = document.getElementById(elementId);
  if (!container || !items) return;

  container.innerHTML = items
    .map(
      (item, idx) => `
      <li>
        <input type="checkbox" id="${elementId}-${idx}">
        <label for="${elementId}-${idx}">${item}</label>
      </li>
    `
    )
    .join("");

  // Bắt sự kiện click để gạch ngang khi đã tick
  container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const parentLi = this.closest("li");
      if (this.checked) {
        parentLi.classList.add("completed");
      } else {
        parentLi.classList.remove("completed");
      }
    });
  });
}

// Thiết lập các nút chuyển nhanh 5 bệnh
function setupQuickSwitchButtons(currentId) {
  const switchBtns = document.querySelectorAll(".switch-btn");
  switchBtns.forEach((btn) => {
    const id = btn.getAttribute("data-id");
    if (id === currentId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      // Đổi URL an toàn không gây lỗi trên file://
      try {
        const newUrl = `${window.location.pathname}?id=${id}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      } catch (err) {
        // Fallback file://
      }

      // Cập nhật lại trạng thái active
      switchBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Render lại chi tiết
      renderDiseaseDetail(id);

      // Cuộn mượt lên đầu nội dung
      window.scrollTo({ top: 120, behavior: "smooth" });
    });
  });
}
