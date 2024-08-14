
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

var PROJECTS = {
    'plano-desenvolvimento-2024': {
        title: 'Mapeamento para a Força Terrestre 2024',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Item 2. Metas de Trabalho, subitem a. do Plano Interno de Trabalho do 1° CGEO - 2024.',
        lotes: [
            { // CT 1:25.000 -- Campos de Instrução do Comando Militar do Sul
                name: 'ct_ci_125000',
                subtitle: 'Cartas Topográficas 1:25.000 de Campos de Instrução do Comando Militar do Sul',
                description: 'Construção de 22 cartas topográficas na escala 1:25.000 visando atender a demanda de atualização de cartas nos Campos de Instrução do Comando Militar do Sul.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'ct_ci_125000-fill',
                        'source': 'ct_ci_125000',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ct_ci_125000-border',
                        'source': 'ct_ci_125000',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ct_ci_125000-text',
                        'source': 'ct_ci_125000',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CT 1:50.000 -- Demanda CMO / Conversão Benchmark
                name: 'demanda_cmo',
                subtitle: 'Cartas Topográficas 1:50.000 do MS',
                description: 'Construção de 16 cartas topográficas na escala 1:50.000 visando atender solicitação do Comando Militar do Oeste no estado do Mato Grosso do Sul.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'demanda_cmo-fill',
                        'source': 'demanda_cmo',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'demanda_cmo-border',
                        'source': 'demanda_cmo',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'demanda_cmo-text',
                        'source': 'demanda_cmo',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:50.000 -- Marechal Hermes
                name: 'co_cimh',
                subtitle: 'Cartas Ortoimagem 1:50.000 do CIMH',
                description: 'Construção de 6 cartas ortoimagem na escala 1:50.000 visando atualizar a geoinformação referente ao Campo de Instrução de Marechal Hermes.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'co_cimh-fill',
                        'source': 'co_cimh',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'co_cimh-border',
                        'source': 'co_cimh',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'co_cimh-text',
                        'source': 'co_cimh',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:25.000 -- Região Metropolitana de Porto Alegre
                name: 'poa_metropolitana',
                subtitle: 'Cartas Ortoimagem 1:25.000 da Região Metropoliana de Porto Alegre',
                description: 'Construção de 8 cartas ortoimagem na escala 1:25.000 visando atender a atualização das Cartas Ortoimagem na Região Metropolitana de Porto Alegre.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'poa_metropolitana-fill',
                        'source': 'poa_metropolitana',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'poa_metropolitana-border',
                        'source': 'poa_metropolitana',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'poa_metropolitana-text',
                        'source': 'poa_metropolitana',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:25.000 -- Campos de Instrução do Comando Militar do Sul
                name: 'ci_co_125000',
                subtitle: 'Cartas Ortoimagem 1:25.000 de Campos de Instrução do CMS',
                description: 'Construção de 35 cartas ortoimagem na escala 1:25.000 visando atender o planejamento de operações para o CMS.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'ci_co_125000-fill',
                        'source': 'ci_co_125000',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ci_co_125000-border',
                        'source': 'ci_co_125000',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ci_co_125000-text',
                        'source': 'ci_co_125000',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },   
    'mapeamento-decex-2024': {
        title: 'Mapeamento por solicitação do DECEx',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Item 2. Metas de Trabalho, subitem b. do Plano Interno de Trabalho do 1° CGEO - 2024.',
        lotes: [
            { // CT 1:50.000 -- DECEx CPOR/CMSP
                name: 'decex_cpor_cmsp',
                subtitle: 'Carta Topográfica 1:50.000 de Capinzal de Cima',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 visando atender a demanda do CPOR/CMSP na região de Capinzal de Cima no estado de São Paulo.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'decex_cpor_cmsp-fill',
                        'source': 'decex_cpor_cmsp',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'decex_cpor_cmsp-border',
                        'source': 'decex_cpor_cmsp',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'decex_cpor_cmsp-text',
                        'source': 'decex_cpor_cmsp',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CT 1:50.000 -- DECEx EsACosAAe
                name: 'decex_esacosaae',
                subtitle: 'Cartas Topográfica 1:50.000 da Região Metropoliana de Curitiba',
                description: 'Construção de 4 cartas topográficas na escala 1:50.000 visando atender a demanda da EsACosAAe.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'decex_esacosaae-fill',
                        'source': 'decex_esacosaae',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'decex_esacosaae-border',
                        'source': 'decex_esacosaae',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'decex_esacosaae-text',
                        'source': 'decex_esacosaae',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'mapeamento-aman-esa-2024': {
        title: 'Mapeamento por solicitação da DSG',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes na disseminação de produtos cartográficos aos Cadetes da AMAN e aos Alunos da ESA',
        lotes: [
            { // CT/CO 1:250.000 -- AMAN ESA
                name: 'aman_esa_2024_250k',
                subtitle: 'Carta Topográfica e Carta Ortoimagem 1:250.000 da Região da AMAN-ESA',
                description: 'Construção de 1 carta topográfica e 1 carta ortoimagem na escala 1:250.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_250k-fill',
                        'source': 'aman_esa_2024_250k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_250k-border',
                        'source': 'aman_esa_2024_250k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_250k-text',
                        'source': 'aman_esa_2024_250k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CT 1:100.000 -- AMAN ESA
                name: 'aman_esa_2024_100k_topo',
                subtitle: 'Cartas Topográfica 1:100.000 da Região da AMAN-ESA',
                description: 'Construção de 2 cartas topográficas na escala 1:100.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_100k_topo-fill',
                        'source': 'aman_esa_2024_100k_topo',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_100k_topo-border',
                        'source': 'aman_esa_2024_100k_topo',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_100k_topo-text',
                        'source': 'aman_esa_2024_100k_topo',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:100.000 -- AMAN ESA
                name: 'aman_esa_2024_100k_orto',
                subtitle: 'Cartas Ortoimagem 1:100.000 da Região da AMAN-ESA',
                description: 'Construção de 2 cartas ortoimagem na escala 1:100.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_100k_orto-fill',
                        'source': 'aman_esa_2024_100k_orto',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_100k_orto-border',
                        'source': 'aman_esa_2024_100k_orto',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_100k_orto-text',
                        'source': 'aman_esa_2024_100k_orto',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CT 1:50.000 -- AMAN ESA
                name: 'aman_esa_2024_50k_topo',
                subtitle: 'Carta Topográfica 1:50.000 da Região da AMAN-ESA',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_50k_topo-fill',
                        'source': 'aman_esa_2024_50k_topo',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_50k_topo-border',
                        'source': 'aman_esa_2024_50k_topo',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_50k_topo-text',
                        'source': 'aman_esa_2024_50k_topo',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:50.000 -- AMAN ESA
                name: 'aman_esa_2024_50k_orto',
                subtitle: 'Carta Ortoimagem 1:50.000 da Região da AMAN-ESA',
                description: 'Construção de 1 carta ortoimagem na escala 1:50.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_50k_orto-fill',
                        'source': 'aman_esa_2024_50k_orto',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_50k_orto-border',
                        'source': 'aman_esa_2024_50k_orto',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_50k_orto-text',
                        'source': 'aman_esa_2024_50k_orto',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CT 1:25.000 -- AMAN ESA
                name: 'aman_esa_2024_25k_topo',
                subtitle: 'Cartas Topográfica 1:25.000 da Região da AMAN-ESA',
                description: 'Construção de 4 cartas topográficas na escala 1:25.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_25k_topo-fill',
                        'source': 'aman_esa_2024_25k_topo',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_25k_topo-border',
                        'source': 'aman_esa_2024_25k_topo',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_25k_topo-text',
                        'source': 'aman_esa_2024_25k_topo',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            { // CO 1:25.000 -- AMAN ESA
                name: 'aman_esa_2024_25k_orto',
                subtitle: 'Cartas Ortoimagem 1:25.000 da Região da AMAN-ESA',
                description: 'Construção de 4 cartas ortoimagem na escala 1:25.000 visando atender a demanda da DSG para apresentação de produtos cartográficos atualizados aos Cadetes da AMAN e aos Alunos da ESA.',
                legend: [
                    1,
                    12,
                    2,
                    5,
                    6,
                    3
                ],
                styles: [
                    {
                        'id': 'aman_esa_2024_25k_orto-fill',
                        'source': 'aman_esa_2024_25k_orto',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'aman_esa_2024_25k_orto-border',
                        'source': 'aman_esa_2024_25k_orto',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'aman_esa_2024_25k_orto-text',
                        'source': 'aman_esa_2024_25k_orto',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 8.86,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    }
}