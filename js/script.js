{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function() \{\
    // Mostra il nuovo username nel footer\
    document.getElementById('username').textContent = getUsername();\
    \
    // Carica le repository (vuote all'inizio)\
    loadRepositories();\
\});\
\
function getUsername() \{\
    // In una implementazione reale, potresti ottenere questo da un API\
    return "tuo-nuovo-username";\
\}\
\
function loadRepositories() \{\
    const repoContainer = document.getElementById('repo-container');\
    repoContainer.innerHTML = '';\
    \
    // Messaggio iniziale\
    if (repoContainer.children.length === 0) \{\
        repoContainer.innerHTML = `\
            <div class="empty-state">\
                <i class="fas fa-folder-open fa-3x"></i>\
                <h3>Nessuna repository</h3>\
                <p>Clicca su "Crea Nuova Repository" per iniziare</p>\
            </div>\
        `;\
    \}\
\}\
\
function createRepo() \{\
    const repoName = prompt("Nome della nuova repository:");\
    if (repoName) \{\
        // Simula la creazione di una nuova repo\
        const repoContainer = document.getElementById('repo-container');\
        \
        // Rimuovi lo stato vuoto se presente\
        if (repoContainer.querySelector('.empty-state')) \{\
            repoContainer.innerHTML = '';\
        \}\
        \
        // Aggiungi la nuova repo\
        repoContainer.innerHTML += `\
            <div class="repo-card">\
                <div class="repo-header">\
                    <h3>$\{repoName\}</h3>\
                </div>\
                <div class="repo-body">\
                    <p><i class="fas fa-code-branch"></i> main</p>\
                    <p><i class="far fa-clock"></i> Creata ora</p>\
                    <div class="repo-actions">\
                        <button class="btn" onclick="cloneRepo('$\{repoName\}')">\
                            <i class="fas fa-download"></i> Clona\
                        </button>\
                    </div>\
                </div>\
            </div>\
        `;\
        \
        alert(`Repository "$\{repoName\}" creata con successo!`);\
    \}\
\}\
\
function cloneRepo(repoName) \{\
    const username = getUsername();\
    alert(`Per clonare la repository:\\ngit clone https://github.com/$\{username\}/$\{repoName\}.git`);\
\}\
\
function pushChanges() \{\
    alert(`Per pushare le modifiche:\\ngit add .\\ngit commit -m "Messaggio di commit"\\ngit push origin main`);\
\}\
\
function showDocumentation() \{\
    window.open("https://docs.github.com", "_blank");\
\}}