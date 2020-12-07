select * from pedidos;

CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(30) NOT NULL,
  `endereco` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `produto` varchar(20) DEFAULT NULL,
  `valorUni` decimal(6,2) DEFAULT NULL,
  `quantidade` varchar(2) DEFAULT NULL,
  `valorTot` decimal(6,2) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpedidos`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1
