
// Espelha dominio.tipo_fase do SAP (code/nome/cor). Os ids DEVEM ser iguais aos
// codes de tipo_fase para que o campo "legend" exportado pelo SAP (que usa
// tipo_fase_id) e o "situacao" do GeoJSON casem corretamente. O id 0 ("Previsto")
// é o default do COALESCE no export e corresponde ao prefixo [0] da legenda do SAP.
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
]

const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

var PROJECTS = {
    'pit-dsg-2025': {
        title: 'Produção de Geoinformação',
        executed: false,
        description: 'Elaboração de produtos previstos no Plano Interno de Trabalho da Diretoria de Serviço Geográfico.',
        lotes: [
            {
                name: 'ct_25k',
                subtitle: 'Cartas Topográficas 1:25.000',
                description: '26 cartas nas seguintes localidades/regiões: Faxinal do Soturno - RS (6), Tubarão - SC (6), Ponta Grossa - PR (3), Parque Nacional do Iguaçu - PR (10), São Luiz - PR (1)',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'ct_25k-fill',
                        'source': 'ct_25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ct_25k-border',
                        'source': 'ct_25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ct_25k-text',
                        'source': 'ct_25k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // Cartas Topográficas 1:50.000
                name: 'ct_50k',
                subtitle: 'Cartas Topográficas 1:50.000',
                description: '53 cartas nas seguintes localidades/regiões: Santiago - RS (10), Faxinal do Soturno - RS (1), Três Barras - SC (8), União da Vitória - SC (8), Parque Nacional do Iguaçu - PR (26)',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'ct_50k-fill',
                        'source': 'ct_50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ct_50k-border',
                        'source': 'ct_50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ct_50k-text',
                        'source': 'ct_50k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // Cartas Ortoimagem 1:25.000
                name: 'co_25k',
                subtitle: 'Cartas Ortoimagem 1:25.000',
                description: '72 cartas previstas nas seguintes localidades/regiões: Caxias do Sul - RS (6), Porto Alegre - RS (7), Rincão do Inhandui - RS (1), Tubarão - SC (6), Palmas - PR (4), Oeste do Estado do Paraná - PR (48)',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'co_25k-fill',
                        'source': 'co_25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'co_25k-border',
                        'source': 'co_25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'co_25k-text',
                        'source': 'co_25k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // Cartas Ortoimagem 1:50.000
                name: 'co_50k',
                subtitle: 'Cartas Ortoimagem 1:50.000',
                description: '2 cartas previstas em Porto Alegre - RS',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'co_50k-fill',
                        'source': 'co_50k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'co_50k-border',
                        'source': 'co_50k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'co_50k-text',
                        'source': 'co_50k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // Carta Ortoimagem 1:10.000
                name: 'co_10k',
                subtitle: 'Cartas Ortoimagem 1:10.000',
                description: 'Cartas Ortoimagem na região sul de Porto Alegre',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'co_10k-fill',
                        'source': 'co_10k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'co_10k-border',
                        'source': 'co_10k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'co_10k-text',
                        'source': 'co_10k',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // COMBATER
                name: 'combater',
                subtitle: 'Dados para o Sistema COMBATER',
                description: 'Dados para o sistema COMBATER na escala 1:50.000 no Oeste do Estado do Paraná',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'combater-fill',
                        'source': 'combater',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'combater-border',
                        'source': 'combater',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'combater-text',
                        'source': 'combater',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            },

            { // Copa do Mundo
                name: 'ct_25k_especial',
                subtitle: 'Carta Ortoimagem e Carta Topográfica (1:25.000) em Enquadramento Especial',
                description: 'Uma carta topográfica e uma carta ortoimagem em enquadramento especial de Porto Alegre - RS',
                legend: [
                    0,
                    11,
                    1,
                    3,
                    4,
                    5
                ],
                styles: [
                    {
                        'id': 'ct_25k_especial-fill',
                        'source': 'ct_25k_especial',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ct_25k_especial-border',
                        'source': 'ct_25k_especial',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ct_25k_especial-text',
                        'source': 'ct_25k_especial',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]
                        },
                        'paint': {}
                    }
                ]
            }
        ]
    }
}