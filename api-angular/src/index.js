const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public/img")));

// Login //

app.post("/login", (req, res) => {
    try {
        const { nome, senha } = req.body

        if (!nome || !senha) {
            return res.status(400).json({
                message: "O campo de usuário ou senha não foi preenchido!"
            });
        }

        if (nome !== "usuario" || senha !== "123") {
            return res.status(401).json({
                message: "O nome de usuário ou senha está incorreto ou não foi cadastrado!"
            });
        }

        return res.status(200).json({
            id: 1,
            nome: "admin",
            email: "admin@email.com"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

// Veículos //

app.get("/vehicles", (req, res) => {
    try {
        const vehicles = [
          
        ];

        return res.status(200).json(vehicles);

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.post("/vehicleData", (req, res) => {
    try {
        const { vin } = req.body;

        // ------------------- CARROS USADOS -------------------//

        if (vin === "1CHEVROLETZ06CORVETTE") {
            return res.status(200).json({
                id: 1,
                ano: 2005,
                carro1: "Chevrolete Corvette Z06",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "7.0L V8 - 505cv",
                cor: "Cinza",
                preco: "103.202",
                imagens: [
                "http://localhost:3001/corvette.jpg",
                "http://localhost:3001/corvette-2.jpg",
                "http://localhost:3001/corvette-3.jpg"
                ]
            });
        }

          if (vin === "1PONTIACGTO") {
            return res.status(200).json({
                id: 2,
                ano: 2004,
                carro1: "Pontiac GTO",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "5.7L V8 - 350cv",
                cor: "Preta",
                preco: "95.900",
                imagens: [
                "http://localhost:3001/pontiac.jpg",
                "http://localhost:3001/pontiac-2.jpg",
                "http://localhost:3001/pontiac-3.jpg"
                ]
            });
        }

        if (vin === "1FORDCVICTORIA") {
            return res.status(200).json({
                id: 3,
                ano: 2000,
                carro1: "Ford Crown Victoria LX",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "4.6L V8 - 224cv",
                cor: "Branca",
                preco: "28.900",
                imagens: [
                "http://localhost:3001/ford-victoria.jpg",
                "http://localhost:3001/ford-victoria-2.jpg",
                "http://localhost:3001/ford-victoria-3.jpg"
                ]
            });
        }

        if (vin === "1MAZDA-RX7") {
            return res.status(200).json({
                id: 4,
                ano: 1993,
                carro1: "Mazda RX7 Touring",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "1.3L TURBO - 255cv",
                cor: "Cinza",
                preco: "230.599",
                imagens: [
                "http://localhost:3001/mazda-rx7.jpg",
                "http://localhost:3001/mazda-rx7-2.jpg",
                "http://localhost:3001/mazda-rx7-3.jpg"
                ]
            });
        }

         if (vin === "1VOLKSWAGEN-GOLF") {
            return res.status(200).json({
                id: 5,
                ano: 2017,
                carro1: "Volkswagen GOLF S",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Dianteira",
                motor: "1.4L TSI - 140cv",
                cor: "Branca",
                preco: "38.695",
                imagens: [
                "http://localhost:3001/volkswagen-golf.jpg",
                "http://localhost:3001/volkswagen-golf-2.jpg",
                "http://localhost:3001/volkswagen-golf-3.jpg"
                ]
            });
        }

        if (vin === "1PORSCHE-CAYMAN") {
            return res.status(200).json({
                id: 6,
                ano: 2006,
                carro1: "Porsche Cayman S",
                transmissao: "Automatica",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "3.4L BOXER - 295cv",
                cor: "Cinza",
                preco: "115.220",
                imagens: [
                "http://localhost:3001/porsche-cayman.jpg",
                "http://localhost:3001/porsche-cayman-2.jpg",
                "http://localhost:3001/porsche-cayman-3.jpg"
                ]
            });
        }

        if (vin === "1DODGE-CHALLENGER") {
            return res.status(200).json({
                id: 7,
                ano: 2009,
                carro1: "Dodge Challenger",
                transmissao: "Manual",
                combustivel: "Gasolina",
                tracao: "Traseira",
                motor: "6.1L HEMI V8 - 425cv",
                cor: "Vermelha",
                preco: "125.500",
                imagens: [
                "http://localhost:3001/dodge-challenger.jpg",
                "http://localhost:3001/dodge-challenger-2.jpg",
                "http://localhost:3001/dodge-challenger-3.jpg"
                ]
            });
        }



        // ------------------- CARROS NOVOS -------------------//

        if (vin === "1ALFAROMEO") {
            return res.status(200).json({
                id: 8,
                ano: 2025,
                carro1: "Alfa Romeo Giulia",
                transmissao: "Automática",
                combustivel: "Gasolina",
                tracao: "Dianteira",
                motor: "2.0L TURBO - 280cv",
                cor: "Branca",
                preco: "295.000",
                imagens: [
                "http://localhost:3001/alfa-romeo.jpg",
                "http://localhost:3001/alfa-romeo-2.jpg",
                "http://localhost:3001/alfa-romeo-3.jpg"
                ]
            });
        }

        if (vin === "1MERCEDES") {
            return res.status(200).json({
                id: 9,
                ano: 2019,
                carro1: "Mercedes CLA 250",
                transmissao: "Automática",
                combustivel: "Gasolina",
                tracao: "Dianteira",
                motor: "2.0L TURBO - 211cv",
                cor: "Cinza",
                preco: "283.000",
                imagens: [
                "http://localhost:3001/mercedes.jpg",
                "http://localhost:3001/mercedes-2.jpg",
                "http://localhost:3001/mercedes-3.jpg"
                ]
            });
        }

        if (vin === "1FORDF150") {
            return res.status(200).json({
                id: 10,
                ano: 2025,
                carro1: "Ford F-150 XLT",
                transmissao: "Automática",
                combustivel: "Gasolina",
                tracao: "4x4",
                motor: "5.0L V8 - 405cv",
                cor: "Cinza",
                preco: "283.000",
                imagens: [
                "http://localhost:3001/ford-f150.jpg",
                "http://localhost:3001/ford-f150-2.jpg",
                "http://localhost:3001/ford-f150-3.jpg"
                ]
            });
        }
      
        if (vin === "1FORDMACH-E") {
            return res.status(200).json({
                id: 11,
                ano: 2025,
                carro1: "Ford Mustang MACH-E Premium",
                transmissao: "Automática",
                combustivel: "Elétrico",
                tracao: "4x4",
                motor: "Elétrico",
                cor: "Branca",
                preco: "420.000",
                imagens: [
                "http://localhost:3001/ford-mach-e.jpg",
                "http://localhost:3001/ford-mach-e-2.jpg",
                "http://localhost:3001/ford-mach-e-3.jpg"
                ]
            });
        }

        if (vin === "1FORDF250") {
            return res.status(200).json({
                id: 12,
                ano: 2025,
                carro1: "Ford F-250 Lariat",
                transmissao: "Automática",
                combustivel: "Diesel",
                tracao: "4x4",
                motor: "V8 6.7 - 446cv",
                cor: "Preta",
                preco: "420.000",
                imagens: [
                "http://localhost:3001/fordf-250.jpg",
                "http://localhost:3001/fordf-250-2.jpg",
                "http://localhost:3001/ford-f250-3.jpg"
                ]
            });
        }

          if (vin === "1FORDBRONCO") {
            return res.status(200).json({
                id: 13,
                ano: 2025,
                carro1: "Ford Bronco",
                transmissao: "Automática",
                combustivel: "Gasolina",
                tracao: "4x4",
                motor: "V6 2.7 - 330cv",
                cor: "Verde",
                preco: "270.000",
                imagens: [
                "http://localhost:3001/ford-bronco.jpg",
                "http://localhost:3001/ford-bronco-2.jpg",
                "http://localhost:3001/ford-bronco-3.jpg"
                ]
            });
        }


        return res.status(400).json({
            message: "Código VIN utilizado não foi encontrado!"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

let pedidos = [];

app.post('/api/pedidos', (req, res) => {
    const { nome, email, telefone, mensagem, carroId, carroNome } = req.body;
  
    if (!nome || !email || !telefone || !carroId || !carroNome) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }
  
    const pedido = {
      id: pedidos.length + 1,
      nome,
      email,
      telefone,
      mensagem,
      carroId,
      carroNome,
      status: 'pendente'
    };
  
    pedidos.push(pedido);
  
    res.status(201).json({ message: 'Pedido criado', pedido });
  });

  app.get('/api/pedidos', (req, res) => {
    res.json(pedidos);
  });

  app.patch('/api/pedidos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;
  
    const pedido = pedidos.find(p => p.id === id);
    if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado' });
  
    pedido.status = status;
    res.json({ message: 'Status atualizado', pedido });
  });
  


app.listen(3001, () => {
    console.log("http://localhost:3001/");
});
