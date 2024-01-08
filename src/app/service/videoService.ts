import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Video from '../Models/Video';

var defaultVideoList : Video[] = [
    {
        "id": "0nFOTJe5lss",
        "year": 2020,
        "title": "FLAMENGO CAMPEÃO! Os gols e a campanha do título 🏆​",
        "description": "O Flamengo é o campeão brasileiro de 2020. A melhor campanha cravou 71 pontos, com 21 vitórias e oito empates em 38 jogos. O time comandado por Rogério Ceni teve o melhor ataque da competição com 68 gols marcados.",
        "posterBase64": "https://img.youtube.com/vi/0nFOTJe5lss/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/0nFOTJe5lss/maxresdefault.jpg"
    },
    {
        "id": "6aS9YlA3-gk",
        "year": 2022,
        "title": "TODOS OS GOLS DO FLAMENGO CAMPEÃO DA CONMEBOL LIBERTADORES 2022​",
        "description": "⭐️⭐️⭐️ O #Flamengo é pela terceira vez o dono da América! O campeão invicto da CONMEBOL #Libertadores 2022 já é especialista da #GloriaEterna.",
        "posterBase64": "https://img.youtube.com/vi/6aS9YlA3-gk/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/6aS9YlA3-gk/maxresdefault.jpg"
    },
    {
        "id": "6e4a6o2t5oY",
        "year": 2022,
        "title": "Eles Conheceram o INFERNO! Flamengo amassa o Galo.​",
        "description": "Bem Vindos ao inferno! Flamengo 2 a 0 Atletico Mineiro.",
        "posterBase64": "https://img.youtube.com/vi/6e4a6o2t5oY/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/6e4a6o2t5oY/maxresdefault.jpg"
    },
    {
        "id": "CDR7kPwPYT8",
        "year": 2019,
        "title": "Flamengo 5 x 0 Grêmio pela Libertadores",
        "description": "FLAMENGO IMPIEDOSO NO MARACA!",
        "posterBase64": "https://img.youtube.com/vi/CDR7kPwPYT8/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/CDR7kPwPYT8/maxresdefault.jpg"
    },
    {
        "id": "Fe-d0i1Kwzk",
        "year": 2020,
        "title": "Supercopa do Brasil 2020 - Flamengo 3 x 0 Athletico PR",
        "description": "É campeão! Trio decide, Flamengo domina o Athletico-PR e conquista a Supercopa.",
        "posterBase64": "https://img.youtube.com/vi/Fe-d0i1Kwzk/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/Fe-d0i1Kwzk/maxresdefault.jpg"
    },
    {
        "id": "IJojfT3KpC0",
        "year": 2019,
        "title": "Todos os detalhes do segundo gol do Flamengo na final da Libertadores 2019",
        "description": "A confiança de #Gabigol... A vibração de Diego... A virada do #Flamengo! Imagens exclusivas do gol que definiu o campeão da CONMEBOL #Libertadores 2019! Um olhar detalhado nos protagonistas do título rubro-negro em Lima!",
        "posterBase64": "https://img.youtube.com/vi/IJojfT3KpC0/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/IJojfT3KpC0/maxresdefault.jpg"
    },
    {
        "id": "LhyOlpEGLLo",
        "year": 2019,
        "title": "23/11, Glória Eterna ao Flamengo",
        "description": "O filme de uma virada épica em imagens inéditas de #Lima. A mão erguida de #Gabigol chamando a bola decisiva, o choro de várias gerações de torcedores e a reação do herói antes de beijar a taça. O desabafo de Rafinha, Diego e dos garotos do Ninho, e muitas cenas inesquecíveis do primeiro campeão em uma final única de #Libertadores. Um documento histórico. Único!",
        "posterBase64": "https://img.youtube.com/vi/LhyOlpEGLLo/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/LhyOlpEGLLo/maxresdefault.jpg"
    },
    {
        "id": "nxG9pPFQMsg",
        "year": 2022,
        "title": "Flamengo 1 x 0 Athletico-PR - Melhores momentos | Final da Libertadores 2022",
        "description": "O Flamengo é campeão da Copa Libertadores de 2022. Melhor: o Flamengo é tricampeão da Libertadores. No estádio Monumental Isidro Romero, em Guayaquil, o Rubro-Negro venceu o Athletico-PR por 1 a 0, com gol de Gabigol, e conquistou de forma invicta o torneio mais desejado da América do Sul, continente que volta a ser pintado de vermelho e preto.",
        "posterBase64": "https://img.youtube.com/vi/nxG9pPFQMsg/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/nxG9pPFQMsg/maxresdefault.jpg"
    },
    {
        "id": "RhLqQwUtk3s",
        "year": 2020,
        "title": "Flamengo x Ind Del Valle | Recopa Sul-Americana | Flamengo Campeão",
        "description": "Com um a menos em grande parte do jogo, o Flamengo não tomou conhecimento do Ind. del Valle e é o campeão da Recopa Sul-Americana 2020! Gabigol guardou o seu e Gerson marcou dois no Maracanã.",
        "posterBase64": "https://img.youtube.com/vi/RhLqQwUtk3s/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/RhLqQwUtk3s/maxresdefault.jpg"
    },
    {
        "id": "uZhdK6Fb5A0",
        "year": 2022,
        "title": "FLAMENGO 1 (6) X (5) 1 CORINTHIANS | PÊNALTIS | FINAL COPA DO BRASIL 2022",
        "description": "Flamengo vence o Corinthians nos pênaltis e é campeão da Copa do Brasil 2022",
        "posterBase64": "https://img.youtube.com/vi/uZhdK6Fb5A0/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/uZhdK6Fb5A0/maxresdefault.jpg"
    },
    {
        "id": "wtl5qhvzWEg",
        "year": 2020,
        "title": "FLAMENGO 2 X 1 INTERNACIONAL | 37ª RODADA BRASILEIRÃO 2020",
        "description": "Fla vence o Inter de virada e assume a liderança na penúltima rodada e encaminho título brasileiro após início de ano conturbado.",
        "posterBase64": "https://img.youtube.com/vi/wtl5qhvzWEg/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/wtl5qhvzWEg/maxresdefault.jpg"
    },
    {
        "id": "xp50MFmKAQs",
        "year": 2022,
        "title": "GABI: O PRÍNCIPE DA GLORIA ETERNA DO FLAMENGO",
        "description": "Um filme com a trajetória de #Gabigol, bicampeão pelo #Flamengo e maior artilheiro brasileiro da história da CONMEBOL #Libertadores.",
        "posterBase64": "https://img.youtube.com/vi/xp50MFmKAQs/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/xp50MFmKAQs/maxresdefault.jpg"
    },
    {
        "id": "ZB6FHKj_lqg",
        "year": 2019,
        "title": "Completo | Todos os gols do Gabigol na Libertadores 2019",
        "description": "Completo | Todos os gols do Gabigol na Libertadores 2019",
        "posterBase64": "https://img.youtube.com/vi/ZB6FHKj_lqg/mqdefault.jpg",
        "bannerBase64": "https://img.youtube.com/vi/ZB6FHKj_lqg/maxresdefault.jpg"
    }
]

@Injectable({
    providedIn: 'root'
  })
export class videoService{

    videoList: Video[];

    constructor(){
        this.videoList = defaultVideoList;
    }

    GetAll(): Video[]{
        return this.videoList;
    }

    GetByID(_id:string): any{
        var result = this.videoList.find(x => x.id == _id);
        return result;
    }

    GetByYear(_year:number) : any{
        var result = this.videoList.filter(x => x.year ===_year);
        return result;
        }
}


