import ChartIcon from '@/components/icons/chart-icon';
import AIIcon from '@/components/icons/ai-icon';

export default async function IndexPage() {
  return (
    <main className="max-w-5xl px-3 mx-auto my-10 md:px-0">
      <div className="text-center">
        <div className="max-w-xl pt-8 mx-auto mb-4 text-[28px] md:text-3xl ">
          Grimório{' '}
          <img
            alt="Grimório Logo"
            className="inline w-10"
            src="/grimorio-sign-transformed.png"
          />{' '}
          é uma plataforma que utiliza IA{' '}
          <AIIcon className="inline w-8 h-8 md:w-11 md:h-11" /> para{' '}
          <span className="border-b-2 border-gray-400 border-dotted">
            criar materiais de curso detalhados e cativantes.{' '}
          </span>
          <ChartIcon className="inline w-8 md:w-auto" />
          <p className="my-6">
            Construído por uma pequena equipe{' '}
            <img
              alt="Grimório Team"
              className="inline h-8 md:h-10"
              src="/members.png"
            />
            querendo revolucionar como ser um autodidata.
          </p>
        </div>
        <div className="mx-auto max-w-96" id="waitlist">
          <form method="post">
            <div className="flex flex-row w-full p-1 mb-4 bg-white border shadow-xs rounded-xl">
              <input
                placeholder="Seu endereço de email"
                className="flex-1 border-0 px-2 focus:ring-0 text-sm"
                type="email"
                name="email"
                id="email"
              />
              <input
                type="submit"
                name="commit"
                value="Entrar na lista de espera"
                className="py-2 px-3 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 border border-gray-900 text-sm"
              />
            </div>

            <p className="text-xs text-gray-500">
              Não é necessário cartão de crédito
            </p>
          </form>
        </div>
        <div className="p-3 mx-auto my-10 bg-black/[0.02] rounded-3xl border border-black/1 shadow-[0px_0px_22.07px_0px_rgba(0,0,0,0.03)]">
          <img
            alt="Grimório Screenshot"
            className="w-full border border-black/1 rounded-2xl shadow-[0_18.39px_22.07px_-3.68px_rgba(11,11,11,0.08)]"
            src="/printscreen.png"
          />
        </div>
      </div>
    </main>
  );
}
