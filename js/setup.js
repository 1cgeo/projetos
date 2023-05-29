
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
    'plano-desenvolvimento-2023': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2023',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes no Anexo E - Programa de Difusão de Produtos e Serviços de Geoinformação, do PDDMT.',
        lotes: [
            {
                name: 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                subtitle: 'Carta Topográfica 1:100.000 do PR - PDDM 2022',
                description: 'Construção de 30 cartas topográficas na escala 1:100.000 visando atender o exercício de adestramento em Jogo de Guerra do C Av Ex na região do PR.',
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
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-fill',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-border',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr-text',
                        'source': 'pddmt-2022-sub-meta-b2-carta-topo-100k-pr',
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
            {
                name: 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                subtitle: 'Carta Ortoimagem 1:50.000 no RS',
                description: 'Construção de 95 cartas ortoimagem na escala 1:50.000 visando atender o planejamento de operações para o CMS.',
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
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-fill',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-border',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs-text',
                        'source': 'pddmt-2023-sub-meta-a-carta-orto-50k-rs',
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
            {
                name: 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                subtitle: 'Carta Topográfica 1:50.000 do PR',
                description: 'Construção de 34 cartas topográficas na escala 1:50.000 visando atender solicitação do CMS na região do PR.',
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
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-fill',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-border',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr-text',
                        'source': 'pddmt-2023-sub-meta-b1-carta-topo-50k-pr',
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
            {
                name: 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs',
                subtitle: 'Carta Topográfica 1:50.000 do RS',
                description: 'Construção de 95 cartas topográficas na escala 1:50.000 visando atender solicitação do CMS na região do RS.',
                zoom: [
                    [-57.76047, -31.00902], // southwestern corner of the bounds
                    [-52.98953, -29.49098] // northeastern corner of the bounds
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
                        'id': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs-fill',
                        'source': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs-border',
                        'source': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs-text',
                        'source': 'pddmt-2023-sub-meta-b2-carta-topo-50k-rs',
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
    'mapeamento-interesse-da-forca-2023': {
        title: 'Mapeamento de Áreas de Interesse da Força Terrestre 2022',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de cartas topográfica em escalas entre 1:25.000 e 1:250.000 de áreas de interesse da Força Terrestre pelo território nacional. A Área de Suprimento Cartográfico (ASC) do 1º Centro de Geoinformação (1º CGEO) corresponde à área de responsabilidade do Comando Militar do Sul (CMS), abrangendo os estados do Rio Grande do Sul, Santa Catarina e Paraná. Dessa forma, o 1º CGEO será responsável por executar esse projeto em sua respectiva área de responsabilidade.',
        lotes: [
            {
                name: 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                subtitle: 'Carta Topográfica 1:25.000 de Curitiba',
                description: 'Construção de 06 cartas topográficas na escala 1:25.000 visando atender a atualização das capitais do ASC.',
                zoom: [
                    [-49.38496, -25.63403], // southwestern corner of the bounds
                    [-49.11504, -25.24097] // northeastern corner of the bounds
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
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-fill',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-border',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba-text',
                        'source': 'mapintfter-2023-sub-meta-a1-carta-topo-25k-curitiba',
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
            {
                name: 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                subtitle: 'Carta Topográfica 1:25.000 de Alegrete',
                description: 'Construção de 03 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.',
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
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-fill',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-border',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete-text',
                        'source': 'mapintfter-2023-sub-meta-a2-carta-topo-25k-alegrete',
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
            {
                name: 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                subtitle: 'Carta Topográfica 1:25.000 de Santana do Livramento',
                description: 'Construção de 04 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.',
                zoom: [
                    [-55.63547, -31.00902], // southwestern corner of the bounds
                    [-55.36453, -30.74098] // northeastern corner of the bounds
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
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-fill',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-border',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento-text',
                        'source': 'mapintfter-2023-sub-meta-a3-carta-topo-25k-stnalivramento',
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
            {
                name: 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                subtitle: 'Carta Topográfica 1:25.000 de Quaraí',
                description: 'Construção de 03 cartas topográficas na escala 1:25.000 visando atender a atualização das campos de instrução das ASC.',
                zoom: [
                    [-56.51042, -30.50902], // southwestern corner of the bounds
                    [-56.36458, -30.24098] // northeastern corner of the bounds
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
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-fill',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-border',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai-text',
                        'source': 'mapintfter-2023-sub-meta-a4-carta-topo-25k-quarai',
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
            {
                name: 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                subtitle: 'Carta Topográfica 1:25.000 do Mato Grosso do Sul',
                description: 'Construção de 64 cartas topográficas militares na escala 1:25.000 na região da fronteira do Mato Grosso do Sul.',
                zoom: [
                    [-58.00962, -21.00903],
                    [-56.99038, -19.99097]
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
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-fill',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-border',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms-text',
                        'source': 'mapintfter-2023-sub-meta-a5-carta-topo-25k-ms',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.34,
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