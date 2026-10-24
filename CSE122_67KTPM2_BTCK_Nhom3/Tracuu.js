// ========================================================
// TRACUU.JS - TÌM KIẾM & HIỂN THỊ HÀNH TRANG KHÁM BỆNH
// ========================================================

const DISEASES_DATA = {
  dada: {
    id: "dada",
    dept: "Khoa Tiêu Hóa - Nội Soi",
    title: "Bệnh Dạ Dày & Khám Nội Soi Tiêu Hóa",
    desc: "Cẩm nang hướng dẫn chuẩn bị hành trang, quy định nhịn ăn 6-8 tiếng và các lưu ý an toàn trước khi đi khám bệnh lý dạ dày hoặc thực hiện nội soi.",
    notes: [
      "Bắt buộc nhịn ăn hoàn toàn ít nhất 6 - 8 tiếng trước khi nội soi/khám dạ dày.",
      "Chỉ uống một chút nước lọc (dưới 100ml) nếu quá khát, ngưng uống trước giờ nội soi 2 tiếng.",
      "Mang theo đơn thuốc đang dùng nếu có bệnh nền (huyết áp, tim mạch, tiểu đường).",
      "Nếu nội soi gây mê/tiền mê: Bắt buộc phải có người nhà đi cùng để đưa về sau khi khám."
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip bản gốc",
        "Thẻ BHYT bản cứng hoặc ứng dụng VssID trên điện thoại",
        "Giấy chuyển tuyến khám chữa bệnh BHYT (nếu có)",
        "Sổ khám bệnh và đơn thuốc dạ dày đang uống gần đây",
        "Kết quả nội soi, xét nghiệm vi khuẩn HP, phim chụp cũ (nếu có)"
      ],
      prep: [
        "Mặc trang phục rộng rãi, thoáng mát, dễ kéo áo lên để siêu âm",
        "Chuẩn bị áo ấm nhẹ hoặc khăn choàng vì phòng nội soi thường lạnh",
        "Khẩu trang y tế và khăn giấy khô / khăn ướt",
        "Mang theo bánh mì mềm hoặc sữa chua để ăn nhẹ sau khi nội soi xong",
        "Chuẩn bị tiền mặt hoặc thẻ ngân hàng để thanh toán viện phí, tạm ứng"
      ],
      questions: [
        "Tôi có cần thực hiện nội soi gây mê hay nội soi thường qua đường mũi/họng?",
        "Tình trạng của tôi có cần làm xét nghiệm tìm vi khuẩn HP không?",
        "Tôi có phải dừng các loại thuốc dạ dày đang uống ở nhà không?",
        "Chế độ ăn uống kiêng khem và sinh hoạt hàng ngày tôi cần tuân thủ như thế nào?"
      ]
    }
  },

  tongquat: {
    id: "tongquat",
    dept: "Khoa Khám Bệnh Tổng Quát",
    title: "Khám Sức Khỏe Tổng Quát & Xét Nghiệm Định Kỳ",
    desc: "Hướng dẫn chuẩn bị đầy đủ hành trang, quy định nhịn ăn lấy máu xét nghiệm, siêu âm và những lưu ý để kết quả đạt độ chính xác cao nhất.",
    notes: [
      "Nhịn ăn sáng từ 8 - 10 tiếng để lấy máu xét nghiệm đường huyết, mỡ máu, chức năng gan thận.",
      "Uống khoảng 500ml nước lọc và nhịn tiểu trước khi siêu âm bụng 1 tiếng để bàng quang căng rõ.",
      "Lấy mẫu nước tiểu giữa dòng (bỏ nước tiểu đầu) vào lọ vô khuẩn để tránh tạp khuẩn.",
      "Nữ giới không khám phụ khoa hay xét nghiệm nước tiểu khi đang trong chu kỳ kinh nguyệt."
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip",
        "Thẻ BHYT hoặc Thẻ bảo lãnh bảo hiểm sức khỏe tư nhân",
        "Hồ sơ khám sức khỏe tổng quát các năm trước (để so sánh chỉ số)",
        "Danh sách các loại thuốc hoặc thực phẩm chức năng đang dùng hàng ngày"
      ],
      prep: [
        "Mặc trang phục 2 mảnh rời (áo rời, quần rời), vải mềm thoải mái",
        "Không đeo đồ trang sức kim loại để thuận tiện khi chụp X-quang, đo điện tim",
        "Mang theo kính cận/viễn đang dùng (không đeo kính áp tròng) để đo thị lực",
        "Chuẩn bị đồ ăn nhẹ (sữa, bánh) trong túi để ăn bù ngay sau khi lấy máu xong",
        "Chuẩn bị kinh phí dự trù cho các gói xét nghiệm chuyên sâu phát sinh"
      ],
      questions: [
        "Các chỉ số mỡ máu, men gan, chức năng thận và đường huyết của tôi có an toàn không?",
        "Với tiền sử gia đình và lối sống hiện tại, tôi có cần làm thêm tầm soát ung thư không?",
        "Tôi có cần tiêm nhắc lại các loại vaccine phòng bệnh nào ở độ tuổi này không?",
        "Bác sĩ có lời khuyên gì về chế độ ăn uống và luyện tập thể chất cho tôi?"
      ]
    }
  },

  nhi: {
    id: "nhi",
    dept: "Khoa Nhi",
    title: "Khám Nhi Khoa (Trẻ Em Sốt, Ho, Tiêu Chảy & Hô Hấp)",
    desc: "Cẩm nang hướng dẫn cha mẹ chuẩn bị giấy tờ, đồ dùng cần thiết và cách theo dõi triệu chứng chuẩn xác trước khi đưa bé đi khám.",
    notes: [
      "Ghi chép chính xác lịch sử sốt: nhiệt độ cao nhất, loại thuốc hạ sốt đã dùng và liều lượng.",
      "Quay video lúc bé thở rút lõm ngực, tiếng ho hoặc chụp ảnh phân, nốt phát ban để bác sĩ xem.",
      "Không cho bé ăn hoặc bú quá no sát giờ khám để tránh nôn trớ khi bác sĩ đè lưỡi khám họng.",
      "Dấu hiệu nguy hiểm: Bé tím tái, thở rên, co giật, li bì khó đánh thức -> Đưa ngay vào cấp cứu!"
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
    dept: "Khoa Tim Mạch",
    title: "Khám Tim Mạch, Tăng Huyết Áp & Rối Loạn Nhịp",
    desc: "Hướng dẫn bệnh nhân chuẩn bị nhật ký huyết áp, hồ sơ tim mạch cũ và các nguyên tắc cần tuân thủ trước khi đo điện tâm đồ, siêu âm tim.",
    notes: [
      "Đo và ghi lại sổ theo dõi huyết áp đo tại nhà vào buổi sáng và tối trong 3 - 5 ngày gần nhất.",
      "Tuyệt đối không uống cà phê, trà đặc, rượu bia và không hút thuốc lá ít nhất 4 tiếng trước khi khám.",
      "Bệnh nhân tăng huyết áp VẪN UỐNG thuốc huyết áp buổi sáng bình thường, mang cả vỉ thuốc theo.",
      "Đến bệnh viện sớm và ngồi nghỉ ngơi thư giãn tại chỗ ít nhất 15 phút trước khi đo huyết áp/điện tim."
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip và Thẻ BHYT",
        "Sổ theo dõi bệnh mạn tính / tăng huyết áp",
        "Toàn bộ các đơn thuốc tim mạch đang sử dụng (mang theo cả vỏ hộp hoặc vỉ thuốc)",
        "Kết quả điện tâm đồ (ECG), siêu âm tim, phim X-quang lồng ngực, đĩa chụp mạch vành cũ"
      ],
      prep: [
        "Mặc áo sơ mi rộng có khuy cài trước hoặc áo cộc tay thoải mái để dễ đo điện tim",
        "Không nên mặc váy liền thân gây bất tiện khi gắn thiết bị đo Holter huyết áp/nhịp tim",
        "Mang theo chai nước lọc và sổ tay ghi chép lại dặn dò của bác sĩ",
        "Đi cùng người thân nếu từng có tiền sử choáng ngất hoặc đau ngực dữ dội"
      ],
      questions: [
        "Chỉ số huyết áp mục tiêu tôi cần duy trì hàng ngày là bao nhiêu?",
        "Cơn đau tức ngực của tôi có nguy cơ dẫn đến nhồi máu cơ tim không?",
        "Tôi có cần thực hiện thêm nghiệm pháp gắng sức hoặc chụp mạch vành không?",
        "Chế độ ăn giảm muối, hạn chế mỡ động vật và bài tập nào phù hợp với tim của tôi?"
      ]
    }
  },

  sanphukhoa: {
    id: "sanphukhoa",
    dept: "Khoa Sản - Phụ Khoa",
    title: "Khám Sản Phụ Khoa & Quản Lý Thai Kỳ Định Kỳ",
    desc: "Cẩm nang hướng dẫn chị em chuẩn bị tâm lý, vệ sinh đúng cách, hồ sơ thai sản và danh sách vật dụng cần thiết trước khi đi khám.",
    notes: [
      "Chỉ vệ sinh nhẹ nhàng bên ngoài bằng nước sạch, tuyệt đối không thụt rửa sâu âm đạo trước khi khám 24h.",
      "Kiêng quan hệ tình dục ít nhất 1 - 2 ngày trước khi khám phụ khoa hoặc tầm soát ung thư cổ tử cung.",
      "Thời điểm khám phụ khoa tốt nhất: sau khi sạch kinh từ 3 - 5 ngày, không đi khám khi đang hành kinh.",
      "Siêu âm thai dưới 12 tuần cần uống nước nhịn tiểu; thai lớn hơn thì nên đi tiểu sạch trước khi siêu âm."
    ],
    checklist: {
      docs: [
        "Căn cước công dân (CCCD) gắn chip và Thẻ BHYT",
        "Sổ khám thai định kỳ (nếu đang mang thai)",
        "Toàn bộ kết quả xét nghiệm máu, Double Test, Triple Test, NIPT và phiếu siêu âm các tuần trước",
        "Đơn thuốc sắt, canxi, acid folic hoặc thuốc đặt phụ khoa đang sử dụng"
      ],
      prep: [
        "Mặc váy liền suông rộng rãi hoặc quần ống rộng thoải mái để thuận tiện khi thăm khám",
        "Đi giày bệt hoặc dép quai hậu dễ tháo cởi, chống trơn trượt",
        "Mang theo khăn giấy khô, khăn ướt và băng vệ sinh hàng ngày dự phòng",
        "Chuẩn bị sổ tay nhỏ hoặc ghi chú trong điện thoại các câu hỏi cần bác sĩ giải đáp"
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

// Từ khóa tìm kiếm cho 5 bệnh
const DISEASE_KEYWORDS = {
  dada: [
    "dada", "1", "da day", "dạ dày", "tiêu hóa", "tieu hoa", "bao tử", "bao tu",
    "nội soi", "noi soi", "ợ chua", "o chua", "trào ngược", "trao nguoc",
    "thượng vị", "thuong vi", "đau bụng", "dau bung", "hp"
  ],
  tongquat: [
    "tongquat", "2", "tổng quát", "tong quat", "định kỳ", "dinh ky", "xét nghiệm", "xet nghiem",
    "khám sức khỏe", "kham suc khoe", "tầm soát", "tam soat", "lấy máu", "lay mau",
    "mỡ máu", "mo mau", "đường huyết", "duong huyet", "men gan", "khám bệnh"
  ],
  nhi: [
    "nhi", "3", "trẻ em", "tre em", "sốt", "sot", "em bé", "em be",
    "sơ sinh", "so sinh", "tiêu chảy", "tieu chay", "nôn trớ", "non tro",
    "co giật", "co giat", "khò khè", "kho khe", "trẻ con", "tre con", "viêm phế quản"
  ],
  timmach: [
    "timmach", "4", "tim mạch", "tim mach", "huyết áp", "huyet ap", "đau ngực", "dau nguc",
    "khó thở", "kho tho", "hồi hộp", "hoi hop", "đo điện tim", "do dien tim",
    "nhồi máu", "nhoi mau", "tăng huyết áp", "tang huyet ap", "đột quỵ", "tim"
  ],
  sanphukhoa: [
    "sanphukhoa", "5", "sản phụ khoa", "san phu khoa", "phụ khoa", "phu khoa",
    "mang thai", "khám thai", "kham thai", "khí hư", "khi hu", "siêu âm", "sieu am",
    "sinh con", "bầu", "kinh nguyệt", "kinh nguyet", "thai", "sản", "san"
  ]
};

// Chuẩn hóa chuỗi tiếng Việt bỏ dấu
function removeVietnameseTones(str) {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

// Hàm nhận diện mã bệnh từ từ khóa nhập vào
function findDiseaseByKeyword(query) {
  if (!query) return null;
  const clean = removeVietnameseTones(query);

  // Loại trừ từ tìm kiếm chung chung
  if (clean === "tim kiem" || clean === "tra cuu") {
    return null;
  }

  // Khớp số thứ tự 1-5
  if (clean === "1") return "dada";
  if (clean === "2") return "tongquat";
  if (clean === "3") return "nhi";
  if (clean === "4") return "timmach";
  if (clean === "5") return "sanphukhoa";

  let bestMatch = null;
  let bestMatchLength = 0;

  for (const [id, keywords] of Object.entries(DISEASE_KEYWORDS)) {
    for (const kw of keywords) {
      const cleanKw = removeVietnameseTones(kw);
      const isWord = new RegExp(`(^|\\s)${cleanKw}(\\s|$)`, "i").test(clean);
      if (isWord || clean.includes(cleanKw)) {
        if (cleanKw.length > bestMatchLength) {
          bestMatch = id;
          bestMatchLength = cleanKw.length;
        }
      }
    }
  }

  return bestMatch;
}

// ========================================================
// LỊCH SỬ TÌM KIẾM - chỉ lưu khi đã đăng nhập, tách riêng theo từng tài khoản
// ========================================================
const MAX_HISTORY = 10;

function getHistoryKey() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser ? `searchHistory_${currentUser.id}` : null;
}

function getSearchHistory() {
  const key = getHistoryKey();
  return key ? JSON.parse(localStorage.getItem(key)) || [] : [];
}

function saveSearchHistory(history) {
  localStorage.setItem(getHistoryKey(), JSON.stringify(history));
}

function addSearchHistory(query, diseaseId) {
  if (!getHistoryKey()) return;
  const history = getSearchHistory().filter(
    (item) => item.query.toLowerCase() !== query.toLowerCase()
  );
  history.unshift({ query, diseaseId });
  saveSearchHistory(history.slice(0, MAX_HISTORY));
}

function hideSearchHistory() {
  document.getElementById("searchHistory").classList.add("hidden");
}

function renderSearchHistory() {
  const box = document.getElementById("searchHistory");
  const list = document.getElementById("searchHistoryList");
  const history = getSearchHistory();

  list.innerHTML = "";
  box.classList.toggle("hidden", history.length === 0);

  history.forEach((item) => {
    const li = document.createElement("li");

    const runBtn = document.createElement("button");
    runBtn.type = "button";
    runBtn.className = "history-run";
    runBtn.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i><span></span>';
    runBtn.querySelector("span").textContent = item.query;
    runBtn.addEventListener("click", () => {
      hideSearchHistory();
      if (DISEASES_DATA[item.diseaseId]) {
        addSearchHistory(item.query, item.diseaseId);
        window.showDisease(item.diseaseId);
      } else {
        document.getElementById("searchInput").value = item.query;
        window.executeSearch();
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "history-remove";
    removeBtn.title = "Xóa khỏi lịch sử";
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.addEventListener("click", (e) => {
      // Nút này bị gỡ khỏi DOM khi render lại, nên chặn để listener "click ra ngoài" không đóng khung
      e.stopPropagation();
      saveSearchHistory(getSearchHistory().filter((h) => h.query !== item.query));
      renderSearchHistory();
    });

    li.append(runBtn, removeBtn);
    list.appendChild(li);
  });
}

// Hàm hiển thị kết quả bệnh trực tiếp trên trang Tra cứu
window.showDisease = function (diseaseId) {
  const data = DISEASES_DATA[diseaseId];
  if (!data) return;

  const resultContainer = document.getElementById("resultContainer");
  const notFoundCard = document.getElementById("notFoundCard");
  const deptEl = document.getElementById("diseaseDept");
  const titleEl = document.getElementById("diseaseTitle");
  const descEl = document.getElementById("diseaseDesc");
  const viewDetailLink = document.getElementById("viewDetailLink");
  const quickNotesList = document.getElementById("quickNotesList");

  if (notFoundCard) notFoundCard.classList.add("hidden");

  if (deptEl) deptEl.textContent = data.dept;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;
  if (viewDetailLink) viewDetailLink.href = `tracuuchitiet.html?id=${diseaseId}`;

  // Render các lưu ý quan trọng
  if (quickNotesList && data.notes) {
    quickNotesList.innerHTML = data.notes
      .map(
        (note) => `
        <li style="display: flex; align-items: flex-start; gap: 8px;">
          <i class="fa-solid fa-circle-check" style="color: #f1c40f; margin-top: 4px; font-size: 13px;"></i>
          <span>${note}</span>
        </li>
      `
      )
      .join("");
  }

  // Render 3 nhóm Checklist
  renderChecklist("docsList", data.checklist.docs);
  renderChecklist("prepList", data.checklist.prep);
  renderChecklist("questionsList", data.checklist.questions);

  // Hiển thị khung kết quả và cuộn mượt xuống
  if (resultContainer) {
    resultContainer.classList.remove("hidden");
    resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Cập nhật giá trị vào ô input cho người dùng thấy
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = data.title.split("&")[0].trim();
  }
};

window.lookupDisease = function (diseaseId) {
  const data = DISEASES_DATA[diseaseId];
  if (!data) return;
  addSearchHistory(data.title, diseaseId);
  window.showDisease(diseaseId);
};

// Render danh sách checklist với checkbox
function renderChecklist(elementId, items) {
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

  container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", function () {
      const parentLi = this.closest("li");
      if (this.checked) {
        parentLi.classList.add("completed");
      } else {
        parentLi.classList.remove("completed");
      }
    });
  });
}

// Hàm thực hiện tìm kiếm chính
window.executeSearch = function () {
  const searchInput = document.getElementById("searchInput");
  const notFoundCard = document.getElementById("notFoundCard");
  const resultContainer = document.getElementById("resultContainer");

  hideSearchHistory();

  let query = "";
  if (searchInput) {
    query = searchInput.value.trim();
  }

  // Nếu chưa nhập gì, tự động hiển thị gợi ý bệnh đầu tiên
  if (!query) {
    window.showDisease("dada");
    return;
  }

  const matchedId = findDiseaseByKeyword(query);
  addSearchHistory(query, matchedId);

  if (matchedId) {
    // Khớp 1 trong 5 bệnh -> hiển thị ngay kết quả
    window.showDisease(matchedId);
  } else {
    // Không khớp -> ẩn kết quả cũ, hiện khung gợi ý
    if (resultContainer) resultContainer.classList.add("hidden");
    if (notFoundCard) {
      notFoundCard.classList.remove("hidden");
      notFoundCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
};

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const resetBtn = document.getElementById("resetChecklistBtn");
  const printBtn = document.getElementById("printBtn");
  const tagBtns = document.querySelectorAll(".tag-btn");
  const suggestBtns = document.querySelectorAll(".btn-suggest");

  // 1. Bấm nút Tìm kiếm
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.executeSearch();
    });
  }

  // 2. Nhấn Enter trong ô input
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        window.executeSearch();
      } else if (e.key === "Escape") {
        hideSearchHistory();
      }
    });
  }

  // 3. Bấm 5 nút Gợi ý nhanh
  tagBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const disease = btn.getAttribute("data-disease");
      if (disease) {
        window.lookupDisease(disease);
      }
    });
  });

  // 4. Bấm các gợi ý trong khung "Không tìm thấy"
  suggestBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const disease = btn.getAttribute("data-disease");
      if (disease) {
        window.lookupDisease(disease);
      }
    });
  });

  // 5. Đặt lại checklist
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll('.checklist-items input[type="checkbox"]');
      checkboxes.forEach((cb) => {
        cb.checked = false;
        cb.closest("li").classList.remove("completed");
      });
    });
  }

  // 6. In / tải danh sách
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // 7. Lịch sử tìm kiếm: hiện khi bấm vào ô tìm kiếm, ẩn khi bắt đầu gõ hoặc bấm ra ngoài
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  if (searchInput) {
    searchInput.addEventListener("focus", renderSearchHistory);
    searchInput.addEventListener("click", renderSearchHistory);
    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim()) {
        hideSearchHistory();
      } else {
        renderSearchHistory();
      }
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", () => {
      localStorage.removeItem(getHistoryKey());
      hideSearchHistory();
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-input-wrap")) {
      hideSearchHistory();
    }
  });

  // 8. Tự động tìm kiếm nếu URL có tham số (?id=dada hoặc ?q=da+day)
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = urlParams.get("id");
  const paramQ = urlParams.get("q");

  if (paramId && DISEASES_DATA[paramId]) {
    window.showDisease(paramId);
  } else if (paramQ) {
    if (searchInput) searchInput.value = paramQ;
    window.executeSearch();
  }
});
