// ==========================================
// 1. DATA SOURCE: SQCDMN_Checklists JSON
// ==========================================
const SQCDMN_Checklists = {
  "Daily": {
    "Safety": [
      { "id": 1, "question": "Respect des Standards de Sécurité (EPI, Portes shuntées et fermées...)?", "type": "single_choice", "options": ["100% objectif", "75%", "50%", "25%", "0%"] },
      { "id": 2, "question": "Nombre de dialogues sécurité ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 3, "question": "Nombre de fiches de risques ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 4, "question": "Nombre d'incidents de la veille ?", "type": "single_choice", "options": ["0", ">1"] },
      { "id": 5, "question": "Permis de travail (feu, électrique, hauteur, espace confiné) ?", "type": "single_choice", "options": ["Tous les permis requis sont valides", "Un ou plusieurs permis manquent"] }
    ],
    "Quality": [
      { "id": 6, "question": "Propreté des machines (zone food safety...)?", "type": "single_choice", "options": ["100% objectif", "Non conforme"] },
      { "id": 7, "question": "Enregistrements et suivis renseignés à l'heure ?", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 8, "question": "Suivi des réclamations qualité ?", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 9, "question": "Respect des règles d'hygiène chantier (tenue, propreté, protections...) ?", "type": "single_choice", "options": ["Conforme", "Non conforme"] }
    ],
    "Delivery": [
      { "id": 10, "question": "Respect des commandes et PSL ?", "type": "single_choice", "options": [">90%", "<90%"] },
      { "id": 11, "question": "Respect du planning maintenance / travaux ?", "type": "single_choice", "options": ["100%", "<100%"] }
    ],
    "Nature": [
      { "id": 12, "question": "Consommation électrique drinks et soufflage ?", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  },
  "Weekly": {
    "Safety": [
      { "id": 1, "question": "Taux global de conformité sécurité (EPI, portes shuntées, balisage...)", "type": "single_choice", "options": ["100% objectif", "75%", "50%", "25%", "0%"] },
      { "id": 2, "question": "Nombre total de dialogues sécurité réalisés cette semaine", "type": "single_choice", "options": ["0", "1-3", ">3"] },
      { "id": 3, "question": "Nombre total de fiches de risques ouvertes cette semaine", "type": "single_choice", "options": ["0", "1-2", ">2"] },
      { "id": 4, "question": "Nombre total d'incidents / quasi-accidents cette semaine", "type": "single_choice", "options": ["0", "1", ">1"] },
      { "id": 5, "question": "Conformité des permis de travail (feu, électrique, hauteur, espace confiné)", "type": "single_choice", "options": ["Tous les permis requis conformes", "Quelques écarts mineurs", "Non conforme"] },
      { "id": 6, "question": "Avancement de l'analyse des risques sécurité (Risk Assessment Safety)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 7, "question": "Audit sécurité hebdomadaire réalisé ?", "type": "single_choice", "options": ["Oui", "Non"] }
    ],
    "Quality": [
      { "id": 8, "question": "Propreté globale des zones PET (machines, convoyeurs, zones sensibles)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 9, "question": "Respect des règles d'hygiène chantier (tenues, propreté, protections alimentaires)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 10, "question": "Taux d’enregistrements et suivis complétés dans les délais", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 11, "question": "Progression du traitement des réclamations qualité chantier", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 12, "question": "Conformité du matériel installé aux plans & standards du constructeur", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 13, "question": "Avancement de l'analyse des risques qualité (Risk Assessment Quality)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] }
    ],
    "Delivery": [
      { "id": 14, "question": "Avancement global vs planning (lookahead 3 semaines)", "type": "single_choice", "options": ["Conforme", "Légère dérive", "Forte dérive"] },
      { "id": 15, "question": "Activités critiques de la semaine réalisées", "type": "single_choice", "options": ["100%", "Partiellement", "Non réalisées"] },
      { "id": 16, "question": "Coactivité maîtrisée (méca, élec, automatisme, génie civil)", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 17, "question": "Pré-requis disponibles pour les travaux de la semaine suivante", "type": "single_choice", "options": ["Oui", "Partiellement", "Non"] }
    ],
    "Nature": [
      { "id": 18, "question": "Zone de chantier propre et déchets triés", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 19, "question": "Contrôle des nuisances (bruit, poussière, émissions)", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 20, "question": "Consommation énergétique soufflage + utilités PET vs cible hebdomadaire", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ]
  },
  "Monthly": {
    "Safety": [
      { "id": 1, "question": "Taux global de conformité sécurité du mois (EPI, balisage, portes, zones...)", "type": "single_choice", "options": ["100% objectif", "90%", "80%", "<80%"] },
      { "id": 2, "question": "Nombre total d'incidents / quasi-accidents du mois", "type": "single_choice", "options": ["0", "1", ">1"] },
      { "id": 3, "question": "Avancement de l'analyse des risques Sécurité (Risk Register Safety)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 4, "question": "Audit Sécurité mensuel réalisé ?", "type": "single_choice", "options": ["Oui", "Non"] },
      { "id": 5, "question": "Conformité des permis de travail (feu, électrique, hauteur, espace confiné)", "type": "single_choice", "options": ["Conforme", "Partiellement conforme", "Non conforme"] }
    ],
    "Quality": [
      { "id": 6, "question": "Conformité hygiène & propreté zone PET (audit mensuel)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 7, "question": "Respect des règles d’hygiène chantier (tenue, flux, protections, barrières alimentaires)", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 8, "question": "Taux d’enregistrements complétés dans les délais", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 9, "question": "Avancement de l’analyse des risques Qualité (Risk Register Quality)", "type": "single_choice", "options": ["100%", "75%", "50%", "25%", "0%"] },
      { "id": 10, "question": "Taux de traitement des non-conformités et réclamations chantier", "type": "single_choice", "options": ["100%", "75%", "50%", "<50%"] },
      { "id": 11, "question": "Conformité de l'installation PET (plans, normes, documentation constructeur)", "type": "single_choice", "options": ["Conforme", "Non conforme"] }
    ],
    "Delivery": [
      { "id": 12, "question": "Avancement global du projet vs planning baseline", "type": "single_choice", "options": ["Conforme", "Légère dérive", "Forte dérive"] },
      { "id": 13, "question": "Avancement des jalons majeurs (milestones)", "type": "single_choice", "options": [">90%", "70-90%", "<70%"] },
      { "id": 14, "question": "Activités critiques du mois réalisées", "type": "single_choice", "options": ["100%", "Partiellement", "Non réalisées"] },
      { "id": 15, "question": "Coactivité maîtrisée au niveau macro (méca, élec, automatisme, génie civil)", "type": "single_choice", "options": ["Oui", "Non"] }
    ],
    "Nature": [
      { "id": 16, "question": "Gestion environnementale du chantier", "type": "single_choice", "options": ["Conforme", "Non conforme"] },
      { "id": 17, "question": "Tri des déchets et tenue environnementale", "type": "single_choice", "options": ["100%", "75%", "<75%"] },
      { "id": 18, "question": "Consommation énergétique (soufflage + utilités PET) vs cible mensuelle", "type": "single_choice", "options": ["En dessous de la cible", "Au dessus de la cible"] }
    ],
    "Leadership": [
      { "id": 19, "question": "Respect des rituels projet (réunions, escalades, reporting)", "type": "single_choice", "options": ["Oui", "Partiellement", "Non"] },
      { "id": 20, "question": "Alignement global des parties prenantes (usine, centrale, fournisseurs)", "type": "single_choice", "options": ["Très bon", "Moyen", "Faible"] },
      { "id": 21, "question": "Pilotage contractuel & gestion des risques", "type": "single_choice", "options": ["Maîtrisé", "Sous contrôle mais amélioration nécessaire", "Non maîtrisé"] }
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
let currentSessionId = null;
let currentSessionStart = null;

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
  currentSessionId = generateSessionId();
  currentSessionStart = new Date().toISOString();
  
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
  
  Object.keys(currentSessionAnswers).forEach(question => {
    newRecords.push({
      id: generateId(),
      session_id: currentSessionId,
      session_start: currentSessionStart,
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
  
  // 1. Regrouper les données par Session
  const sessions = {};
  data.forEach(row => {
    const sId = row.session_id || row.timestamp; // fallback pour vieux enregistrements
    if (!sessions[sId]) {
      sessions[sId] = {
        id: sId,
        start: row.session_start || row.timestamp,
        end: row.timestamp,
        role: row.role,
        type: row.checklist_type,
        answers: {}
      };
    }
    // Assigner la réponse à la colonne question correspondante
    sessions[sId].answers[row.question] = row.answer;
  });

  // 2. Extraire toutes les questions uniques pour former les colonnes du tableau
  const allQs = new Set();
  data.forEach(r => allQs.add(r.question));
  const qsArray = Array.from(allQs);
  
  // 3. En-têtes fixes basés sur votre modèle
  let csvContent = `"ID Session","Heure de début","Heure de fin","Email","Nom","Rôle","Type Checklist"`;
  
  // En-têtes dynamiques (questions SQCDMN)
  qsArray.forEach(q => {
    csvContent += `,"${q.replace(/"/g, '""')}"`;
  });
  csvContent += "\n";

  // 4. Lignes (Chaque session = 1 ligne)
  Object.values(sessions).forEach(sess => {
    const dStart = new Date(sess.start).toLocaleString();
    const dEnd = new Date(sess.end).toLocaleString();
    
    // Colonnes fixes
    csvContent += `"${sess.id}","${dStart}","${dEnd}","utilisateur-terrain@centrale.com","${sess.role}","${sess.role}","${sess.type}"`;
    
    // Colonnes dynamiques des réponses
    qsArray.forEach(q => {
      const ans = sess.answers[q] || "Non spécifié";
      csvContent += `,"${ans.replace(/"/g, '""')}"`;
    });
    csvContent += "\n";
  });

  // Forcer l'encodage correct pour Excel avec un BOM UTF-8
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
