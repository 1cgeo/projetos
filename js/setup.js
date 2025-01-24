
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
    'pit-dsg-2025': {
        title: 'Mapeamento para a Força Terrestre 2024',
        executed: false,
        description: 'O objetivo do presente projeto consiste na elaboração de produtos para atender as demandas constantes Plano Interno de Trabalho da Diretoria de Serviço Geográfico.',
        lotes: [
            { // Bloco 1A
                name: 'bloco_1a_2025',
                subtitle: 'Cartas Topográficas 1:25.000 na região oeste do Paraná',
                description: 'Construção de 23 cartas topográficas na escala 1:25.000 na região de Foz do Iguaçu.',
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
                        'id': 'bloco_1a_2025-fill',
                        'source': 'bloco_1a_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1a_2025-border',
                        'source': 'bloco_1a_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1a_2025-text',
                        'source': 'bloco_1a_2025',
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
            { // Bloco 1B
                name: 'bloco_1b_2025',
                subtitle: 'Cartas Topográficas 1:25.000 na região leste do Paraná',
                description: 'Construção de 2 cartas topográficas na escala 1:25.000 visando complementar os dados da região de Ponta Grossa, na cidade de Guaragi',
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
                        'id': 'bloco_1b_2025-fill',
                        'source': 'bloco_1b_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1b_2025-border',
                        'source': 'bloco_1b_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1b_2025-text',
                        'source': 'bloco_1b_2025',
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
            { // Bloco 1C
                name: 'bloco_1c_2025',
                subtitle: 'Cartas Topográficas 1:25.000 em Cruz Alta - RS',
                description: 'Construção de 4 cartas topográficas na escala 1:25.000 visando fornecer geoinformação atualizada, dados de Streetview, modelos 3D e produtos de drone para a EASA',
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
                        'id': 'bloco_1c_2025-fill',
                        'source': 'bloco_1c_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1c_2025-border',
                        'source': 'bloco_1c_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1c_2025-text',
                        'source': 'bloco_1c_2025',
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
            { // Bloco 1D
                name: 'bloco_1d_2025',
                subtitle: 'Cartas Topográficas 1:25.000 em Bagé - RS',
                description: 'Construção de 4 cartas topográficas na escala 1:25.000 visando fornecer geoinformação atualizada, dados de Streetview, modelos 3D e produtos de drone para a 3ª Bda C Mec',
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
                        'id': 'bloco_1d_2025-fill',
                        'source': 'bloco_1d_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1d_2025-border',
                        'source': 'bloco_1d_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1d_2025-text',
                        'source': 'bloco_1d_2025',
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
            { // Bloco 1E
                name: 'bloco_1e_2025',
                subtitle: 'Carta Topográfica 1:50.000 em Reserva - PR',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 na cidade de Reserva - PR',
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
                        'id': 'bloco_1e_2025-fill',
                        'source': 'bloco_1e_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1e_2025-border',
                        'source': 'bloco_1e_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1e_2025-text',
                        'source': 'bloco_1e_2025',
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
            { // Bloco 1F
                name: 'bloco_1f_2025',
                subtitle: 'Cartas Topográficas 1:50.000 em Sanca Catarina',
                description: 'Construção de 2 cartas topográficsa na escala 1:50.000 nas cidades de Florianopólis e Blumenau visando apoio das OM da 14ª Bda Inf Mtz',
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
                        'id': 'bloco_1f_2025-fill',
                        'source': 'bloco_1f_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1f_2025-border',
                        'source': 'bloco_1f_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1f_2025-text',
                        'source': 'bloco_1f_2025',
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
            { // Bloco 1G
                name: 'bloco_1g_2025',
                subtitle: 'Carta Topográfica 1:50.000 em Cruz Alta',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 na cidade de Cruz Alta, realizada por meio de generalização de cartas topográficas 1:25.000',
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
                        'id': 'bloco_1g_2025-fill',
                        'source': 'bloco_1g_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1g_2025-border',
                        'source': 'bloco_1g_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1g_2025-text',
                        'source': 'bloco_1g_2025',
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
            { // Bloco 1H
                name: 'bloco_1h_2025',
                subtitle: 'Cartas Topográficas 1:50.000 no Vale do Taquari - RS',
                description: 'Construção de 4 cartas topográficas na escala 1:50.000 na região do Vale do Taquari.',
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
                        'id': 'bloco_1h_2025-fill',
                        'source': 'bloco_1h_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1h_2025-border',
                        'source': 'bloco_1h_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1h_2025-text',
                        'source': 'bloco_1h_2025',
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
            { // Bloco 1I
                name: 'bloco_1i_2025',
                subtitle: 'Cartas Topográficas 1:50.000 na região Sul e Sudoeste do RS',
                description: 'Construção de 32 cartas topográficas na escala 1:50.000 na região Sul e Sudoeste do Rio Grande do Sul.',
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
                        'id': 'bloco_1i_2025-fill',
                        'source': 'bloco_1i_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1i_2025-border',
                        'source': 'bloco_1i_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1i_2025-text',
                        'source': 'bloco_1i_2025',
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
            { // Bloco 1J
                name: 'bloco_1j_2025',
                subtitle: 'Cartas Topográficas 1:100.000 na região do Campo de Instrução de Marechael Hermes',
                description: 'Construção de 3 cartas topográficas na escala 1:100.000 na região do Campo de Instrução de Marechal Hermes, além das cidades de São Mateus do Sul, Canoinhas, Papanduva e Irineópolis',
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
                        'id': 'bloco_1j_2025-fill',
                        'source': 'bloco_1j_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1j_2025-border',
                        'source': 'bloco_1j_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1j_2025-text',
                        'source': 'bloco_1j_2025',
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
            { // Bloco 1K
                name: 'bloco_1k_2025',
                subtitle: 'Carta Topográfica 1:50.000 em Bagé',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 na cidade de Bagé, realizada por meio de generalização de cartas topográficas 1:25.000',
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
                        'id': 'bloco_1k_2025-fill',
                        'source': 'bloco_1k_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1k_2025-border',
                        'source': 'bloco_1k_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1k_2025-text',
                        'source': 'bloco_1k_2025',
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
            { // Bloco 1L
                name: 'bloco_1l_2025',
                subtitle: 'Carta Topográfica 1:50.000 em Ponta Grossa - PR',
                description: 'Construção de 1 carta topográfica na escala 1:50.000 na cidade de Ponta Grossa - PR, realizada por meio de generalização de cartas topográficas 1:25.000 produzidas em 2024.',
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
                        'id': 'bloco_1l_2025-fill',
                        'source': 'bloco_1l_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1l_2025-border',
                        'source': 'bloco_1l_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1l_2025-text',
                        'source': 'bloco_1l_2025',
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
            { // Bloco 1M
                name: 'bloco_1m_2025',
                subtitle: 'Carta Topográfica 1:25.000 na região metropolitana de Curitiba - PR',
                description: 'Construção de 8 cartas topográficas na escala 1:25.000 na região metropolitana de Curitiba',
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
                        'id': 'bloco_1m_2025-fill',
                        'source': 'bloco_1m_2025',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bloco_1m_2025-border',
                        'source': 'bloco_1m_2025',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bloco_1m_2025-text',
                        'source': 'bloco_1m_2025',
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
    }
}