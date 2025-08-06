const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-12">
        <h2 className="text-4xl font-bold text-gray-800">Enviar Orden</h2>
        <p className="text-gray-500 text-lg mt-4">
          Completa tus datos para enviar tu orden.
        </p>

        <form onSubmit={sendOrder} className="mt-12 space-y-10">
          <div>
            <label className="block text-xl font-medium text-gray-700 mb-3">
              Nombre completo
            </label>
            <input
              type="text"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-5"
            />
          </div>

          <div>
            <label className="block text-xl font-medium text-gray-700 mb-3">
              Número de teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-5"
            />
          </div>


          <div>
            <label className="block text-xl font-medium text-gray-700 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-5"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-5 px-8 rounded-lg text-xl shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Enviar Orden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCheckout;
