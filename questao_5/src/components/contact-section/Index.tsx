import toast from "react-hot-toast";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-gray-900 font-extrabold text-4xl mb-4">
            Fale Conosco
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Se você tiver alguma dúvida, sugestão ou apenas quiser conversar,
            sinta-se à vontade para entrar em contato conosco. Estamos aqui para
            ajudar!
          </p>
        </div>
        <form
          className="space-y-8 bg-white border border-gray-200 rounded-2xl shadow-md p-10"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Nome Completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              type="text"
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Ex: seuemail@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Sua mensagem..."
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            onClick={() => toast.success("E-mail enviado com sucesso")}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold shadow hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
