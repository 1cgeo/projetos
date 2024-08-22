// Inicializa o objeto PROJECTS
var PROJECTS = {}
// Carrega os dados de estilos dos projetos
const SUBTITLE_STATES = [
    {
        id: 0,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 1,
        name: 'Extração',
        color: 'rgb(252,141,89)'
    },
    {
        id: 2,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 3,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 4,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 5,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 6,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 7,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 8,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 9,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 10,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 11,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 12,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 13,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 14,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 15,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    },
    {
        id: 16,
        name: 'Preparo',
        color: 'rgb(175,141,195)'
    }
];
// Carrega o zoom inicial
const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
};
// Função para gerar os estilos	
function generateStyles(name) {
    return [
        {
            'id': `${name}-fill`,
            'source': `${name}`,
            'type': 'fill',
            'layout': {},
            'paint': {
                'fill-opacity': 0.9
            }
        },
        {
            'id': `${name}-border`,
            'source': `${name}`,
            'type': 'line',
            'layout': {},
            'paint': {
                'line-color': '#050505',
                'line-width': 0.5
            }
        },
        {
            'id': `${name}-text`,
            'source':`${name}`,
            "type": "symbol",
            "maxzoom": 10,
            'layout': {
                'text-field': ['to-string', ['get', 'identificador']]
            },
            'paint': {}
        }
    ];
}
// Função para gerar os projetos
function adaptJsonToProjects(jsonData) {
    const projects = {};

    for (const [projectId, projectData] of Object.entries(jsonData)) {
        const lotes = projectData.lotes.map(lote => ({
            name: lote.name,  // Ajustar conforme necessário para o 'name' desejado
            subtitle: lote.subtitle,
            description: lote.description,
            legend: lote.legend,
            styles: generateStyles(lote.name)  // Supondo que há uma função `generateStyles` que você já tem
        }));

        projects[projectId] = {
            title: projectData.title,
            executed: false,  // Pode ser ajustado conforme a lógica do seu sistema
            description: projectData.description,
            lotes: lotes
        };
    }

    return projects;
}
// Função para carregar e adaptar os projetos
async function loadAndAdaptProjects() {
    try {
        // Carrega os dados do JSON de forma assíncrona
        const response = await fetch('./data/dados.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON: ' + response.statusText);
        }
        const jsonData = await response.json();

        // Adapta os dados usando a função adaptJsonToProjects
        const adaptedProjects = adaptJsonToProjects(jsonData);
    
        // 3. Insere os dados adaptados na variável global PROJECTS
        Object.assign(PROJECTS, adaptedProjects);

    } catch (error) {
        console.error('Erro durante a adaptação dos projetos:', error);
    }
}
// Chama a função para carregar e adaptar os projetos
window.loadAndAdaptProjects = loadAndAdaptProjects;