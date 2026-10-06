(() => {
  const features = [
    ['client','客戶基本資料','客戶基本資料.png','先建立可追溯的案件底稿，把聯絡、地址與服務資訊集中在同一處。','減少在不同文件反覆找資料的時間，後續分析頁可沿用同一份已核對的基本資訊。',['新增客戶：建立一筆新的案件資料，輸入後可再逐項補齊。','客戶搜尋：開啟既有案件，避免重複建立相同客戶。','編輯資料：修正身份、聯絡或地址欄位；儲存前請人工核對。']],
    ['family','主繼承圖','繼承圖.png','以家族節點呈現人物關係、繼承順位與持分討論的基礎。','先把人物與關係說清楚，能讓後續試算與溝通有共同的可檢視起點。',['新增家屬：建立配偶、子女、父母等節點。','關係設定：標示親屬關係與必要的身分資訊。','重新整理試算：依目前輸入更新畫面；法律效果仍需個案確認。']],
    ['estate-tax','遺產及贈與稅試算','遺產稅計算.png','把財產、負債、扣除與稅額假設放在同一個試算工作區。','可快速看出資料缺口與不同安排的差異，協助準備與專業人士討論。',['財產項目：輸入或修正資產、債務與相關資料。','扣除額：檢視可納入試算的扣除條件與來源。','更新試算：用目前資料重新計算；結果不是申報或核定。']],
    ['deduction','遺產扣除額分析','遺產扣除額分析畫面.png','集中呈現家庭成員與扣除額配置，讓假設不再散落各頁。','協助找出可能遺漏的家屬資料，提升試算前的檢核效率。',['載入家屬：帶入主繼承圖中已確認的關係資料。','調整條件：依個案輸入可用的扣除或限制。','檢視分布：比較各項扣除的組成與總額。']],
    ['assets','資產分佈與稅賦','asset-distribution-tax.png','從資產類別、稅賦與家庭淨得角度，整理單一情境的全貌。','讓家人或顧問能以圖表討論配置，而不是只看零散數字。',['選擇情境：切換目前要檢視的規劃條件。','資產明細：查看來源資料與各類資產組成。','稅賦摘要：閱讀試算結果與注意事項，不代替正式稅務意見。']],
    ['insurance','商業保險稅法分析','商業保險稅法分析.png','整理要保人、被保人、受益人與保單資料的角色關係。','能協助發現角色設定與規劃目標是否一致，方便與保險專業人員覆核。',['新增保單：輸入保單基本資料與角色。','關係圖：視覺化檢視各角色與保單連結。','風險提示：閱讀待確認事項；不代表承保或給付結論。']],
    ['disability','社會保險殘障等級分析','社會保險殘障等級分析.png','以制度與等級資料協助整理失能保障的比較項目。','可先形成一致的資料清單，降低跨制度溝通時遺漏條件的風險。',['選擇制度：切換要比較的社會保險制度。','輸入等級：填入或調整已取得的評估資料。','比較給付：查看試算式整理，正式資格仍由主管機關認定。']],
    ['retirement','退休年金比較','退休年金比較.png','比較不同請領時點與制度條件下的退休年金情境。','把年齡、年資與預估金額拆開呈現，便於討論現金流與退休規劃。',['設定年資：輸入已確認的投保或服務年資。','調整請領日：比較不同開始請領時點。','查看比較：閱讀估算與假設，非主管機關核發金額。']],
    ['loan','專業貸款分析','專業貸款分析.png','將利率、年期、費用與每月現金流放進同一個比較架構。','可用一致格式比較方案成本，幫助使用者在洽談前提出更清楚的問題。',['選擇貸款類型：指定房屋、土地、車貸或其他情境。','載入範例：帶入對應的示意條件，僅供操作參考。','更新試算：比較月付、利息與總成本，不構成核貸承諾。']],
    ['land','土地交易與稅務分析','土地交易與稅務分析.png','整合地籍、交易、成本與稅費的工作頁，供案件資料逐步核對。','讓交易前應備資料與風險點更容易被看見，而非只關注單一稅額。',['免費地址定位：協助帶入地點相關資料；仍需核對官方資料。','套用至土地資料：把已確認的查詢結果帶入案件欄位。','更新試算：依目前條件重新估算，正式申報須專業覆核。']],
    ['reports','報表列印','報表列印.png','依工作頁選取要交付或討論的內容，先預覽再列印或另存。','有助於把複雜資訊整理成可閱讀的溝通材料，並保留人工確認步驟。',['選取報表：勾選需要的主題與摘要。','預覽：先檢查文字、數字與頁面範圍。','列印／另存 PDF：輸出前確認不含不應分享的個資。']],
    ['law','法規條文','遺產及贈與稅法條文.png','將常用民法、稅務、保險與土地法規分類整理，方便閱讀與定位。','可縮短查找時間，但不把法規摘要當成對個案的法律結論。',['法規分類：依主題切換條文集合。','條文清單：選取要閱讀的法規或條次。','全文搜尋：在可用範圍內定位文字；請以官方最新版本覆核。']],
    ['backup','資料備份與還原','資料備份總覽.png','提供完整備份、匯入與還原的流程，降低裝置更換或意外時的資料風險。','讓使用者能保留可回復的工作紀錄；還原前先預覽可避免覆蓋錯誤資料。',['建立備份：輸出目前可備份的案件資料。','匯入預覽：先檢查檔案格式與筆數，再決定是否還原。','還原資料：寫入前再次確認目標與內容，避免覆蓋。']],
    ['email','電子郵件自動化','email-automation.png','協助整理客戶篩選、信件範本與人工確認後的寄送流程。','可讓例行聯繫更有一致性，同時保留寄送前的人工作業與內容審核。',['設定寄件帳號：依畫面引導完成帳號設定，憑證由帳戶擁有人管理。','選擇收件名單：依條件檢視對象並人工覆核。','預覽／寄送：先閱讀內容與收件人，確認後才會執行寄送。']]
  ];
  const map = Object.fromEntries(features.map((item, index) => [item[0], { id: item[0], order: String(index + 1).padStart(2, '0'), title: item[1], image: item[2], summary: item[3], value: item[4], actions: item[5] }]));
  const cards = document.querySelectorAll('.showcase-card');
  cards.forEach((card, index) => {
    const item = features[index]; if (!item) return;
    const url = `feature.html?f=${encodeURIComponent(item[0])}`;
    card.setAttribute('role', 'link'); card.setAttribute('tabindex', '0'); card.dataset.feature = item[0];
    card.addEventListener('click', () => { window.location.href = url; });
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); window.location.href = url; } });
  });
  const host = document.querySelector('[data-feature-host]');
  if (!host) return;
  const id = new URLSearchParams(window.location.search).get('f'); const item = map[id] || map.client;
  document.title = `${item.title}｜功能介紹｜傳承智策`;
  host.innerHTML = `<p class="eyebrow">FEATURE ${item.order}</p><div class="feature-shell"><a class="lesson-back" href="./">← 回到畫面導覽</a><h1>${item.title}</h1><p class="feature-summary">${item.summary}</p><figure class="product-screenshot"><img src="../assets/tutorial-screenshots/${item.image}" alt="${item.title}示意畫面"></figure><div class="feature-value"><strong>實用價值：</strong>${item.value}</div><h2>畫面上的主要按鍵與功能</h2><div class="feature-actions">${item.actions.map((text, index) => { const [name, detail] = text.split('：'); return `<article class="feature-action"><h3>${index + 1}. ${name}</h3><p>${detail}</p></article>`; }).join('')}</div><p class="note">本頁為功能導覽。涉及稅務、法規、保險、貸款、權利或申報時，請以最新官方資料與適格專業人士的個案覆核為準。</p><div class="feature-next"><a class="quiet button" href="./">← 瀏覽其他功能</a><a class="primary button" href="../releases/">查看測試下載方式</a></div></div>`;
})();
