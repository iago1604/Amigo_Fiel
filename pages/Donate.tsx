import React from 'react';
import { Gift, HeartHandshake, Package, CreditCard, Copy } from 'lucide-react';

const Donate: React.FC = () => {
  const copyPix = () => {
    navigator.clipboard.writeText('00.000.000/0001-00');
    alert('Chave PIX copiada!');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-brand-greenDark font-bold tracking-wider uppercase">Sua ajuda salva vidas</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-2 mb-6">Como Ajudar</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Não somos financiados pelo governo. Dependemos inteiramente da generosidade de pessoas como você para manter nossos portões abertos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Doação Financeira</h3>
              <p className="text-slate-500 mb-6">Ajude a pagar contas veterinárias, ração e manutenção do abrigo.</p>
              <button className="text-blue-600 font-bold hover:underline">Ver dados bancários</button>
           </div>
           
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Seja Voluntário</h3>
              <p className="text-slate-500 mb-6">Doe seu tempo para passear, brincar ou ajudar na limpeza e eventos.</p>
              <button className="text-orange-600 font-bold hover:underline">Inscrever-se</button>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Doe Itens</h3>
              <p className="text-slate-500 mb-6">Precisamos sempre de ração, cobertores, remédios e produtos de limpeza.</p>
              <button className="text-green-600 font-bold hover:underline">Ver lista de necessidades</button>
           </div>
        </div>

        {/* PIX Section */}
        <div className="bg-brand-greenDark text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10 flex-1">
                <h2 className="text-3xl font-display font-bold mb-4">Faça um PIX agora</h2>
                <p className="text-white/80 text-lg mb-6">
                    É a forma mais rápida de ajudar o AmigoFiel a continuar salvando vidas hoje mesmo.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center justify-between max-w-md border border-white/20">
                    <code className="font-mono text-lg">00.000.000/0001-00</code>
                    <button 
                        onClick={copyPix}
                        className="bg-white text-brand-greenDark p-2 rounded-lg hover:bg-brand-cream transition-colors"
                        title="Copiar chave"
                    >
                        <Copy size={20} />
                    </button>
                </div>
            </div>
            
            <div className="relative z-10">
                <div className="bg-white p-4 rounded-xl">
                    {/* Placeholder for QR Code */}
                    <div className="w-32 h-32 bg-slate-200 flex items-center justify-center text-slate-400 text-xs text-center">
                        QR Code PIX
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
