
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
            { // CT Campo de Instrução 1:25.000
                name: 'ct_ci_125000',
                subtitle: 'Carta Topográfica 1:25.000 de Campos de Instrução do CMS',
                description: 'Construção de 22 cartas topográficas na escala 1:25.000 visando atender a demanda de atualização de cartas nos Campos de Instrução do CMS.',
                zoom: [
                    [-54.00995, -25.50903],
                    [-50.99005, -22.99097]
                ],
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
            { // Demanda CMO / Conversão Benchmark
                name: 'demanda_cmo',
                subtitle: 'Carta Topográfica 1:50.000 do MS',
                description: 'Construção de 16 cartas topográficas na escala 1:50.000 visando atender solicitação do CMO no estado do MS.',
                zoom: [
                    [-54.01012, -27.50902], // southwestern corner of the bounds
                    [-52.48988, -25.99097] // northeastern corner of the bounds
                ],
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
            { // CO Marechal Hermes
                name: 'co_cimh',
                subtitle: 'Carta Ortoimagem 1:50.000 do CIMH',
                description: 'Construção de 06 cartas ortoimagem na escala 1:50.000 visando atualizar a geoinformação referente ao Campo de Instrução de Marechal Hermes.',
                zoom: [
                    [-54.00995, -25.50903],
                    [-50.99005, -22.99097]
                ],
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
            { // CO Região Metropolitana de Porto Alegre
                name: 'poa_metropolitana',
                subtitle: 'Carta Ortoimagem 1:25.000 da Região Metropoliana de Porto Alegre',
                description: 'Construção de 08 cartas ortoimagem na escala 1:25.000 visando atender a atualização das Cartas Ortoimagem na Região Metropolitana de Porto Alegre.',
                zoom: [
                    [-54.75999, -26.00903], // southwestern corner of the bounds
                    [-52.49001, -22.49097] // northeastern corner of the bounds
                ],
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
            { // CO Campos de Instrução CMS
                name: 'ci_co_125000',
                subtitle: 'Carta Ortoimagem 1:25.000 de Campos de Instrução do CMS',
                description: 'Construção de 17 cartas ortoimagem na escala 1:25.000 visando atender o planejamento de operações para o CMS.',
                zoom: [
                    [-54.75999, -26.00903], // southwestern corner of the bounds
                    [-52.49001, -22.49097] // northeastern corner of the bounds
                ],
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
            { // DECEx CPOR/CMSP
                name: 'decex_cpor_cmsp',
                subtitle: 'Carta Topográfica 1:50.000 de Capinzal de Cima',
                description: 'Construção de 01 carta topográfica na escala 1:50.000 visando atender a demanda do CPOR/CMSP na região de Capinzal de Cima no estado de São Paulo.',
                zoom: [
                    [-48.75000001515696, -24.499999781820947], // southwestern corner of the bounds
                    [-48.50000011346867, -24.249999880132663] // northeastern corner of the bounds
                ],
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
            { // DECEx EsACosAAe
                name: 'decex_esacosaae',
                subtitle: 'Carta Topográfica 1:50.000 da Região Metropoliana de Curitiba',
                description: 'Construção de 04 cartas topográficas na escala 1:50.000 visando atender a demanda da EsACosAAe.',
                zoom: [
                    [-55.88536, -30.00902], // southwestern corner of the bounds
                    [-55.61464, -29.74098] // northeastern corner of the bounds
                ],
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
    }
}