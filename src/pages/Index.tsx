import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Свечи из бетона",
      description:
        "Уникальные ароматические свечи в бетонных подсвечниках ручной работы",
      price: "от 890₽",
      image: "img/e89c8b74-5703-4cf2-a74d-9b0e259ed745.jpg",
      category: "Свечи",
    },
    {
      id: 2,
      name: "Ароматические диффузоры",
      description:
        "Элегантные диффузоры с натуральными маслами для создания атмосферы",
      price: "от 1200₽",
      image: "img/297ad0ff-805a-43f3-9f4e-7972adcd1399.jpg",
      category: "Диффузоры",
    },
    {
      id: 3,
      name: "Натуральное мыло",
      description:
        "Мыло ручной работы из натуральных компонентов с эфирными маслами",
      price: "от 450₽",
      image: "img/a7cf8e6e-c72b-4ddf-9765-c291530ca587.jpg",
      category: "Мыло",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center">
                <Icon name="Leaf" className="w-5 h-5 text-stone-100" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-800">
                  Ароматы Ручной Работы
                </h1>
                <p className="text-xs text-stone-600 font-medium">АРР</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#sale"
                className="text-stone-700 hover:text-stone-900 transition-colors"
              >
                Акции
              </a>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/20 to-stone-700/20" />
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-stone-200 text-stone-800 hover:bg-stone-300">
            <Icon name="Sparkles" className="w-3 h-3 mr-1" />
            Новая коллекция
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 leading-tight font-playfair">
            Создаем уют
            <br />
            <span className="text-stone-600">своими руками</span>
          </h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Уникальные свечи из бетона, ароматические диффузоры и натуральное
            мыло ручной работы. Каждое изделие создано с любовью и вниманием к
            деталям.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-stone-800 hover:bg-stone-900 text-white"
            >
              <Icon name="ShoppingBag" className="w-5 h-5 mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-300 text-stone-700"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Индивидуальный заказ
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="w-8 h-8 text-stone-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Доставка по России
              </h3>
              <p className="text-stone-600">
                Бережная доставка в любой уголок страны
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" className="w-8 h-8 text-stone-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Индивидуальные заказы
              </h3>
              <p className="text-stone-600">
                Создаем уникальные изделия по вашим пожеланиям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-stone-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-stone-800">
                Ручная работа
              </h3>
              <p className="text-stone-600">
                Каждое изделие создано с любовью и вниманием
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Наша коллекция
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Откройте для себя мир натуральных ароматов и уникальных изделий
              ручной работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white border-stone-200"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-stone-800 text-white">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 text-stone-800">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-stone-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-stone-800">
                      {product.price}
                    </span>
                    <Button className="bg-stone-800 hover:bg-stone-900 text-white">
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-20 bg-gradient-to-r from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            <Icon name="Gift" className="w-3 h-3 mr-1" />
            Специальное предложение
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Скидка 15% на первый заказ
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Оформите заказ прямо сейчас и получите скидку на любые изделия из
            нашей коллекции
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-stone-800 hover:bg-stone-100"
            >
              <Icon name="Tag" className="w-5 h-5 mr-2" />
              Получить скидку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Leaf" className="w-4 h-4 text-stone-800" />
                </div>
                <span className="font-bold">АРР</span>
              </div>
              <p className="text-stone-400 text-sm">
                Ароматы Ручной Работы — создаем уют в вашем доме
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Свечи
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Диффузоры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мыло
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Наборы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@arr-candles.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>Доставка по всей России</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; 2024 Ароматы Ручной Работы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
