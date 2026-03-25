// ==========================================
// 1. DATA SOURCE: SQCDMN_Checklists JSON
// ==========================================
const SQCDMN_Checklists = {
  "Daily": {
    "Safety": [
      { "question": "Respect des Standards de Sécurité (EPI, Portes shuntées et fermées...)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "question": "Nombre de dialogues sécurité", "type": "single_choice", "options": ["0", ">1"] },
      { "question": "Nombre de fiches de risques", "type": "single_choice", "options": ["0", ">1"] },
      { "question": "Nombre d'incidents de la veille", "type": "single_choice", "options": ["0", ">1"] }
    ],
    "Quality": [
      { "question": "Propreté des machines (zone food safety...)", "type": "single_choice", "options": ["100% objectif", "Non conforme"] },
      { "question": "Enregistrements et suivis renseignés à l’heure", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "question": "Suivi des réclamations qualité", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] }
    ],
    "Cost": [
      { "question": "Poids petites bouteilles vides", "type": "single_choice", "options": [">9.2", "<9.2"] },
      { "question": "Poids grandes bouteilles vides", "type": "single_choice", "options": ["<13.4", ">13.4"] },
      { "question": "Poids bouteilles twist vides", "type": "single_choice", "options": ["<13", ">13"] },
      { "question": "Poids bouteilles twitter vides", "type": "single_choice", "options": ["9", ">9"] }
    ],
    "Delivery": [
      { "question": "Respect des commandes et PSL", "type": "single_choice", "options": [">90%", "<90%"] },
      { "question": "Respect planning maintenance", "type": "single_choice", "options": ["100%", "<100%"] }
    ],
    "Performance": [
      { "question": "OE soufflage", "type": "single_choice", "options": ["<90%", ">90%"] },
      { "question": "OE Drinks", "type": "single_choice", "options": [">85%", "<85%"] }
    ],
    "Motivation": [
      { "question": "TT réalisé par les leaders ?", "type": "single_choice", "options": ["Oui", "Non"] },
      { "question": "Application des basics (ilotage, 5S, sol sec, hygiène...)", "type": "single_choice", "options": ["Oui", "Non"] },
      { "question": "Consommation électrique drinks et soufflage", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  },
  "Weekly": {
    "Safety": [
      { "question": "Taux de conformité sécurité (EPI, portes...)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "question": "Total dialogues sécurité réalisés", "type": "single_choice", "options": ["0", "1-3", ">3"] },
      { "question": "Total fiches de risques ouvertes", "type": "single_choice", "options": ["0", "1-2", ">2"] },
      { "question": "Nombre total d'incidents (semaine)", "type": "single_choice", "options": ["0", ">1"] }
    ],
    "Quality": [
      { "question": "Propreté zone food safety (trend hebdomadaire)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Enregistrements à l’heure (moyenne hebdo)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "question": "Suivi des réclamations qualité (trend)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] }
    ],
    "Cost": [
      { "question": "Stabilité des poids (petite bouteille)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Stabilité des poids (grande bouteille)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Stabilité des poids (twist)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Stabilité des poids (twitter)", "type": "single_choice", "options": ["Conforme", "Non conforme"] }
    ],
    "Delivery": [
      { "question": "Respect commandes & PSL – moyenne semaine", "type": "single_choice", "options": [">90%", "<90%"] },
      { "question": "Réalisation planning maintenance (hebdo)", "type": "single_choice", "options": ["100%", "75%", "<75%"] }
    ],
    "Performance": [
      { "question": "OE soufflage (moyenne semaine)", "type": "single_choice", "options": [">90%", "<90%"] },
      { "question": "OE Drinks (moyenne semaine)", "type": "single_choice", "options": [">85%", "<85%"] }
    ],
    "Motivation": [
      { "question": "TT leaders (taux hebdomadaire)", "type": "single_choice", "options": ["100%", "75%", "<75%"] },
      { "question": "État des basics (5S, sol sec...)", "type": "single_choice", "options": ["Bon", "Moyen", "Faible"] }
    ]
  },
  "Monthly": {
    "Safety": [
      { "question": "Taux de conformité sécurité (mensuel)", "type": "single_choice", "options": ["100%", "90%", "80%", "<80%"] },
      { "question": "Total dialogues sécurité (mois)", "type": "single_choice", "options": ["0", "1-5", ">5"] },
      { "question": "Fiches de risques traitées (%)", "type": "single_choice", "options": ["100%", "75%", "<50%"] },
      { "question": "Incidents du mois", "type": "single_choice", "options": ["0", "1", ">1"] }
    ],
    "Quality": [
      { "question": "Score propreté food safety (audit mensuel)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Enregistrements réalisés dans les délais (mois)", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "question": "Taux de traitement des réclamations", "type": "single_choice", "options": ["100%", "75%", "<50%"] }
    ],
    "Cost": [
      { "question": "Stabilité poids bouteilles (moyenne mensuelle)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "question": "Analyse dérives coûts matières", "type": "single_choice", "options": ["Pas de dérive", "Faible dérive", "Forte dérive"] }
    ],
    "Delivery": [
      { "question": "Respect commandes & PSL (moyenne mensuelle)", "type": "single_choice", "options": [">95%", "90-95%", "<90%"] },
      { "question": "Achèvement maintenance préventive", "type": "single_choice", "options": ["100%", "90%", "<90%"] }
    ],
    "Performance": [
      { "question": "OE soufflage – moyenne mensuelle", "type": "single_choice", "options": [">90%", "<90%"] },
      { "question": "OE Drinks – moyenne mensuelle", "type": "single_choice", "options": [">85%", "<85%"] }
    ],
    "Motivation": [
      { "question": "Taux TT leaders (mois)", "type": "single_choice", "options": ["100%", "75%", "<75%"] },
      { "question": "Respect Basics & 5S (évaluation mensuelle)", "type": "single_choice", "options": ["Excellent", "Moyen", "Faible"] },
      { "question": "Consommation énergie vs cible (mois)", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  }
};

const ROLE_SETTINGS = {
  "factory": { title: "Responsable Usine", icon: "🏭", type: "Daily" },
  "central": { title: "Responsable Centrale", icon: "🏢", type: "Weekly" },
  "director": { title: "Directeur Projet", icon: "👔", type: "Monthly" }
};

// ==========================================
// STATE VARIABLES
// ==========================================
let currentRoleKey = null;
let currentChecklistType = null;
let currentSessionAnswers = {}; 

// DOM Elements
const views = document.querySelectorAll('.view');
const btnEnter = document.getElementById('btn-enter');
const roleButtons = document.querySelectorAll('.btn-role');
const btnBackMenu = document.getElementById('btn-back-menu');
const btnDashboardNav = document.getElementById('btn-dashboard-nav');
const btnBackFromDashboard = document.getElementById('btn-back-from-dashboard');
const btnBackToDashboard = document.getElementById('btn-back-to-dashboard');

const checklistTitle = document.getElementById('checklist-title');
const checklistContainer = document.getElementById('checklist-container');
const dashboardList = document.getElementById('dashboard-list');
const historyDetailContainer = document.getElementById('history-detail-container');
const historyDetailTitle = document.getElementById('history-detail-title');

// Initialize App
function init() {
  generateQRCode();
  setupEventListeners();
  
  // Auto-navigate if opened via QR Code
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'menu') {
    navigateTo('menu');
  }
}

function navigateTo(viewId) {
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewId}`).classList.add('active');
  window.scrollTo(0,0);
}

function generateQRCode() {
  const qrcodeContainer = document.getElementById("qrcode-container");
  if(!qrcodeContainer) return;
  qrcodeContainer.innerHTML = "";
  
  // Nettoyer l'URL des anciens paramètres
  let appUrl = window.location.href.split('?')[0]; 
  if (appUrl.startsWith("file://")) appUrl = "https://sherpa-field.demo/app";

  // Ajouter le paramètre pour ouvrir directement le menu
  appUrl += "?action=menu";

  try {
    new QRCode(qrcodeContainer, {
      text: appUrl,
      width: 200, height: 200,
      colorDark : "#1d4ed8", colorLight : "#ffffff", // Blue QR Code
      correctLevel : QRCode.CorrectLevel.H
    });
  } catch(e) { console.error(e); }
}

// ==========================================
// DATA STORAGE ENGINE
// ==========================================
function loadAllResponses() {
  const data = localStorage.getItem('SQCDMN_Responses');
  return data ? JSON.parse(data) : [];
}

function saveResponses(responsesArray) {
  const existing = loadAllResponses();
  const updated = existing.concat(responsesArray);
  localStorage.setItem('SQCDMN_Responses', JSON.stringify(updated));
}

function generateId() {
  return 'res_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function generateSessionId() {
  return 'sess_' + Date.now().toString(36);
}

// ==========================================
// CHECKLIST UI LOGIC
// ==========================================
function openChecklist(roleKey) {
  currentRoleKey = roleKey;
  const settings = ROLE_SETTINGS[roleKey];
  currentChecklistType = settings.type;
  
  checklistTitle.textContent = `${settings.icon} ${settings.title} (${settings.type})`;
  currentSessionAnswers = {}; 
  
  const checklistData = SQCDMN_Checklists[settings.type];
  renderChecklistItems(checklistData);
  
  navigateTo('checklist');
}

function renderChecklistItems(checklistData) {
  checklistContainer.innerHTML = '';
  
  Object.keys(checklistData).forEach(category => {
    const questions = checklistData[category];
    
    const catBlock = document.createElement("div");
    catBlock.className = "category-block";
    catBlock.innerHTML = `<h2 class="category-header">${category}</h2>`;
    
    questions.forEach(q => {
      const qCard = document.createElement("div");
      qCard.className = "question-card";
      
      const qTitle = document.createElement("div");
      qTitle.className = "question-title";
      qTitle.textContent = q.question;
      qCard.appendChild(qTitle);
      
      const optionsRow = document.createElement("div");
      optionsRow.className = "options-row";
      
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.textContent = opt;
        
        btn.addEventListener("click", () => {
          Array.from(optionsRow.children).forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          currentSessionAnswers[q.question] = opt;
        });
        optionsRow.appendChild(btn);
      });
      qCard.appendChild(optionsRow);
      catBlock.appendChild(qCard);
    });
    
    checklistContainer.appendChild(catBlock);
  });
  
  // Appends Submit Button inline at the very bottom
  const submitBlock = document.createElement("div");
  submitBlock.className = "inline-submit-container";
  submitBlock.innerHTML = `<button id="btn-submit-inline" class="btn btn-success">Soumettre les réponses</button>`;
  checklistContainer.appendChild(submitBlock);

  // Bind new inline button
  document.getElementById('btn-submit-inline').addEventListener('click', submitChecklist);
}

function submitChecklist() {
  // Calculer le nombre total de questions pour la checklist sélectionnée
  let totalQuestions = 0;
  Object.values(SQCDMN_Checklists[currentChecklistType]).forEach(questionsList => {
    totalQuestions += questionsList.length;
  });

  const answeredCount = Object.keys(currentSessionAnswers).length;
  if (answeredCount < totalQuestions) {
    alert(`Oups ! Veuillez répondre à toutes les questions avant de soumettre.\n(${answeredCount} / ${totalQuestions} complétées)`);
    return;
  }
  
  const newRecords = [];
  const timestampISO = new Date().toISOString();
  const sessionIdentifier = generateSessionId(); // groups them together for visual history
  
  Object.keys(currentSessionAnswers).forEach(question => {
    newRecords.push({
      id: generateId(),
      session_id: sessionIdentifier, // internal grouping ID
      role: ROLE_SETTINGS[currentRoleKey].title,
      checklist_type: currentChecklistType,
      question: question,
      answer: currentSessionAnswers[question],
      timestamp: timestampISO
    });
  });
  
  saveResponses(newRecords);
  alert(`Soumission réussie ! ${newRecords.length} réponses enregistrées.`);
  navigateTo('menu');
}

// ==========================================
// DASHBOARD & EXPORT TO EXCEL
// ==========================================
function loadDashboard() {
  const responses = loadAllResponses();
  dashboardList.innerHTML = '';
  
  if (responses.length === 0) {
    dashboardList.innerHTML = '<p style="text-align:center;color:#6b7280;">Aucune session enregistrée.</p>';
    return;
  }

  // Group by session
  const sessions = {};
  responses.forEach(r => {
    const key = r.session_id || r.timestamp; // fallback if old record
    if(!sessions[key]) {
      sessions[key] = { role: r.role, type: r.checklist_type, date: new Date(r.timestamp).toLocaleString(), questions: [] };
    }
    sessions[key].questions.push({ q: r.question, a: r.answer });
  });

  // Render clickable cards
  Object.values(sessions).reverse().forEach(sess => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="history-card-header">
        <span class="history-role">${sess.role}</span>
        <span class="history-date">${sess.date}</span>
      </div>
      <div class="history-prog">
        Type: ${sess.type} — ${sess.questions.length} réponses ✅<br>
        <small style="color:var(--color-primary);margin-top:5px;display:block;">🔎 Cliquez pour voir les détails</small>
      </div>
    `;
    
    // Feature requested: Click on history card to see answers
    card.addEventListener('click', () => {
      openHistoryDetail(sess);
    });

    dashboardList.appendChild(card);
  });
}

function openHistoryDetail(sessObj) {
  historyDetailTitle.textContent = `${sessObj.role} (${sessObj.date})`;
  historyDetailContainer.innerHTML = '';
  
  sessObj.questions.forEach(item => {
    const div = document.createElement('div');
    div.className = 'detail-item';
    div.innerHTML = `
      <div class="detail-q">${item.q}</div>
      <div class="detail-a">Réponse: ${item.a}</div>
    `;
    historyDetailContainer.appendChild(div);
  });
  
  navigateTo('history-detail');
}

function exportToExcelCSV() {
  const data = loadAllResponses();
  if(data.length === 0) {
    alert("Aucune donnée à exporter.");
    return;
  }
  
  // Create CSV Header
  let csvContent = "ID,ROLE,TYPE,QUESTION,REPONSE,TIMESTAMP\n";
  
  data.forEach(row => {
    // Escape quotes to prevent CSV breaking
    const safeQ = row.question ? row.question.replace(/"/g, '""') : "";
    const safeA = row.answer ? row.answer.replace(/"/g, '""') : "";
    
    csvContent += `"${row.id}","${row.role}","${row.checklist_type}","${safeQ}","${safeA}","${row.timestamp}"\n`;
  });

  // Trigger download (BOM for Excel UTF-8 reading)
  const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Export_SQCDMN_Excel.csv";
  a.click();
}

// ==========================================
// EVENTS Binding
// ==========================================
function setupEventListeners() {
  btnEnter.addEventListener('click', () => navigateTo('menu'));
  
  roleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      openChecklist(e.currentTarget.dataset.role);
    });
  });
  
  btnBackMenu.addEventListener('click', () => navigateTo('menu'));
  
  // We recreate export button for CSV (Excel)
  const btnExport = document.createElement("button");
  btnExport.className = "btn btn-primary mt-4";
  btnExport.innerHTML = "📥 Exporter en fichier Excel (CSV)";
  btnExport.onclick = exportToExcelCSV;
  
  document.getElementById('view-dashboard').appendChild(btnExport);

  btnDashboardNav.addEventListener('click', () => {
    loadDashboard();
    navigateTo('dashboard');
  });

  btnBackFromDashboard.addEventListener('click', () => navigateTo('menu'));
  btnBackToDashboard.addEventListener('click', () => navigateTo('dashboard'));
}

document.addEventListener('DOMContentLoaded', init);
