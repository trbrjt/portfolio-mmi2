//on attend que le HTML soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    //appel des fonctions pour créer les 4 graphiques
    creerGraphique1();
    creerGraphique2();
    creerGraphique3();
    creerGraphique4();
});


function creerGraphique1() {
    // les données de mon analyse de spotify_users_data
    var ages = ['6-12', '12-20', '20-35', '35-60', '60+'];
    var nombre = [1, 71, 296, 31, 1];
    
    var trace1 = {
        x: ages,
        y: nombre,
        type: 'bar', 
        marker: {
            color: ['#4ECDC4', '#95E1D3', '#1DB954', '#F38181', '#FF6B6B'],
            line: { color: '#000', width: 1 }
        },
        text: nombre.map(String), 
        textposition: 'auto'
    };
    

    var layout = {
        title: {
            text: 'Répartition des Utilisateurs',
            font: { family: 'Poppins', size: 20, color: '#FFFFFF' }
        },
        xaxis: {
            title: { text: 'Tranche d\'âge', font: { color: '#B3B3B3' } },
            tickfont: { color: '#B3B3B3' }
        },
        yaxis: {
            title: { text: 'Nombre d\'utilisateurs', font: { color: '#B3B3B3' } },
            tickfont: { color: '#B3B3B3' }
        },
        plot_bgcolor: '#181818',
        paper_bgcolor: '#181818',
        margin: { t: 60, b: 50, l: 50, r: 20 }
    };
    
    Plotly.newPlot('graphique1', [trace1], layout, {responsive: true});
}


function creerGraphique2() {
    var tranches = ['6-12', '12-20', '20-35', '35-60', '60+'];
    
    //podcast
    var tracePodcast = {
        x: tranches,
        y: [100, 33.8, 14.5, 25.8, 0],
        name: 'Podcast',
        type: 'bar',
        marker: { color: '#4ECDC4' } 
    };
    
    //musique
    var traceMusique = {
        x: tranches,
        y: [0, 66.2, 85.5, 74.2, 100],
        name: 'Musique',
        type: 'bar',
        marker: { color: '#1DB954' } // vert spotify
    };
    
    var layout = {
        title: {
            text: 'Préférence Musique vs Podcast',
            font: { family: 'Poppins', size: 20, color: '#FFFFFF' }
        },
        barmode: 'stack', 
        xaxis: {
            title: { text: 'Tranche d\'âge', font: { color: '#B3B3B3' } },
            tickfont: { color: '#B3B3B3' }
        },
        yaxis: {
            title: { text: 'Pourcentage (%)', font: { color: '#B3B3B3' } },
            range: [0, 100],
            tickfont: { color: '#B3B3B3' }
        },
        legend: {
            orientation: 'h', // légende horizontale
            font: { color: '#FFFFFF' },
            y: 1.1 // je remonte un peu la légende
        },
        plot_bgcolor: '#181818',
        paper_bgcolor: '#181818',
        margin: { t: 80, b: 50, l: 50, r: 20 }
    };
    
    Plotly.newPlot('graphique2', [tracePodcast, traceMusique], layout, {responsive: true});
}


function creerGraphique3() {
    var genres = ['Melody', 'Pop', 'Classical', 'Rap', 'Electronic'];
    

    var traceJeunes = {
        x: genres,
        y: [42, 23, 8, 5, 0],
        name: '12-20 ans',
        type: 'bar',
        marker: { color: '#95E1D3' }
    };
    
    var traceAdultes = {
        x: genres,
        y: [158, 62, 28, 12, 8],
        name: '20-35 ans',
        type: 'bar',
        marker: { color: '#1DB954' }
    };
    
  
    var traceSeniors = {
        x: genres,
        y: [15, 5, 7, 2, 2],
        name: '35-60 ans',
        type: 'bar',
        marker: { color: '#F38181' }
    };
    
    var layout = {
        title: {
            text: 'Genres favoris par âge',
            font: { family: 'Poppins', size: 20, color: '#FFFFFF' }
        },
        barmode: 'group',
        xaxis: {
            title: { text: 'Genre', font: { color: '#B3B3B3' } },
            tickfont: { color: '#B3B3B3' }
        },
        yaxis: {
            title: { text: 'Nombre d\'écoutes', font: { color: '#B3B3B3' } },
            tickfont: { color: '#B3B3B3' }
        },
        legend: {
            orientation: 'h',
            font: { color: '#FFFFFF' },
            y: 1.1
        },
        plot_bgcolor: '#181818',
        paper_bgcolor: '#181818',
        margin: { t: 80, b: 50, l: 50, r: 20 }
    };
    
    Plotly.newPlot('graphique3', [traceJeunes, traceAdultes, traceSeniors], layout, {responsive: true});
}


function creerGraphique4() {
    // musique
    var traceMusique = {
        x: [14, 17, 27.5, 47.5, 60], // age moyen
        y: [3.8, 3.9, 4.0, 3.9, 4.2], // note moyenne
        mode: 'markers', // juste des points
        name: 'Musique',
        marker: {
            //taille manuelle pour représenter la population
            size: [15, 25, 50, 20, 10], 
            color: '#1DB954',
            opacity: 0.7,
            line: { color: 'white', width: 1 }
        },
        text: ['47 avis', '118 avis', '253 avis', '25 avis', '1 avis']
    };
    
    // podcast
    var tracePodcast = {
        x: [10, 16, 27.5, 47.5],
        y: [4.0, 4.1, 4.2, 4.0],
        mode: 'markers',
        name: 'Podcast',
        marker: {
            size: [10, 18, 30, 15],
            color: '#4ECDC4',
            opacity: 0.7,
            line: { color: 'white', width: 1 }
        },
        text: ['1 avis', '24 avis', '43 avis', '8 avis']
    };
    
    var layout = {
        title: {
            text: 'Satisfaction vs Âge',
            font: { family: 'Poppins', size: 20, color: '#FFFFFF' }
        },
        xaxis: {
            title: { text: 'Âge moyen', font: { color: '#B3B3B3' } },
            range: [5, 65],
            tickfont: { color: '#B3B3B3' },
            gridcolor: '#333'
        },
        yaxis: {
            title: { text: 'Note / 5', font: { color: '#B3B3B3' } },
            range: [3, 5],
            tickfont: { color: '#B3B3B3' },
            gridcolor: '#333'
        },
        legend: {
            font: { color: '#FFFFFF' },
            orientation: 'h',
            y: 1.1
        },

        annotations: [{
            text: 'Taille bulle = Nb utilisateurs',
            xref: 'paper', yref: 'paper',
            x: 0.5, y: -0.2,
            showarrow: false,
            font: { color: '#666' }
        }],
        plot_bgcolor: '#181818',
        paper_bgcolor: '#181818',
        margin: { t: 80, b: 80, l: 50, r: 20 }
    };
    
    Plotly.newPlot('graphique4', [traceMusique, tracePodcast], layout, {responsive: true});
}