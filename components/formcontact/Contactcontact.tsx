'use client'
import React, { useState, ChangeEvent } from 'react';
import { Phone, Mail, MapPin, Upload, Clock, AlertCircle } from 'lucide-react';

// Tipos para el formulario
interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tipoServicio: string;
  barrio: string;
  direccion: string;
  descripcion: string;
  urgencia: string;
  fotos: File[];
  horarios: string[];
  primerVez: string;
  comoConocio: string;
}

interface UrgenciaOption {
  value: string;
  label: string;
  emergency: boolean;
}

type ServiceType = 'Plomería' | 'Electricidad' | 'Carpintería' | 'Aire Acondicionado' | 'Remodelación' | 'Múltiples Servicios' | 'Emergencia';

type UrgencyType = 'hoy' | 'semana' | 'proxima' | 'esperar';

type ScheduleType = 'Mañana (7am-12pm)' | 'Tarde (12pm-5pm)' | 'Noche (5pm-7pm)';

type ReferralType = 'Redes sociales' | 'Recomendación' | 'Google' | 'Pasando por la zona' | 'Cliente anterior';

const ContactForm2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    tipoServicio: '',
    barrio: '',
    direccion: '',
    descripcion: '',
    urgencia: '',
    fotos: [],
    horarios: [],
    primerVez: '',
    comoConocio: ''
  });

  const [isEmergency, setIsEmergency] = useState<boolean>(false);

  const servicios: ServiceType[] = [
    'Plomería',
    'Electricidad', 
    'Carpintería',
    'Aire Acondicionado',
    'Remodelación',
    'Múltiples Servicios',
    'Emergencia'
  ];

  const urgenciaOptions: UrgenciaOption[] = [
    { value: 'hoy', label: 'Hoy mismo (Emergencia)', emergency: true },
    { value: 'semana', label: 'Esta semana', emergency: false },
    { value: 'proxima', label: 'Próxima semana', emergency: false },
    { value: 'esperar', label: 'Puedo esperar', emergency: false }
  ];

  const horariosOptions: ScheduleType[] = [
    'Mañana (7am-12pm)',
    'Tarde (12pm-5pm)', 
    'Noche (5pm-7pm)'
  ];

  const comoConocioOptions: ReferralType[] = [
    'Redes sociales',
    'Recomendación',
    'Google',
    'Pasando por la zona',
    'Cliente anterior'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'urgencia') {
      setIsEmergency(value === 'hoy');
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = e.target;
    if (name === 'horarios') {
      setFormData(prev => ({
        ...prev,
        horarios: checked 
          ? [...prev.horarios, value]
          : prev.horarios.filter(h => h !== value)
      }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setFormData(prev => ({ ...prev, fotos: [...prev.fotos, ...fileArray] }));
    }
  };

  const handleSubmit = (): void => {
    // Validar campos requeridos
    const requiredFields: (keyof FormData)[] = ['nombre', 'telefono', 'tipoServicio', 'direccion', 'urgencia'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (!isEmergency && !formData.email) {
      missingFields.push('email');
    }
    
    if (missingFields.length > 0) {
      alert(`Por favor completa los siguientes campos: ${missingFields.join(', ')}`);
      return;
    }
    
    console.log('Datos del formulario:', formData);
    alert('¡Formulario enviado correctamente! Te contactaremos pronto.');
  };

  const isRequired = (field: keyof FormData): boolean => {
    const essentialFields: (keyof FormData)[] = ['nombre', 'telefono', 'tipoServicio', 'direccion'];
    return essentialFields.includes(field);
  };

  return (
    <div className="py-8 px-4 relative">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
        />
        
        {/* Overlay difuminado opcional */}
        <div className="absolute inset-0  backdrop-blur-xs "></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 rounded-2xl shadow">
            <div className="h-full bg-gradient-to-br from-[#d44d13]/80 to-[#d44d13] rounded-2xl p-8 text-white shadow-2xl flex flex-col">
  <h2 className="text-6xl font-bold mb-3">Solicita tu servicio</h2>
  <p className="mb-8 opacity-90">
    Servicios técnicos especializados con más de 10 años de experiencia
  </p>

  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <Phone className="w-5 h-5" />
      <div>
        <p className="font-semibold">+57 313 284 17 28</p>
        <p className="text-sm opacity-75">WhatsApp disponible 24/7</p>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <Mail className="w-5 h-5" />
      <div>
        <p className="font-semibold">elsolucionador2019@gmail.com</p>
        <p className="text-sm opacity-75">Respuesta en 2 horas</p>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <MapPin className="w-5 h-5" />
      <div>
        <p className="font-semibold">Bogotá, Colombia</p>
        <p className="text-sm opacity-75">Cobertura en toda la ciudad</p>
      </div>
    </div>
  </div>

  {/* mt-auto empuja esta caja al fondo */}
  <div className="mt-auto p-4 bg-white/10 rounded-lg backdrop-blur-sm">
    <div className="flex items-center space-x-2 mb-2">
      <AlertCircle className="w-4 h-4" />
      <span className="font-semibold text-sm">EMERGENCIAS 24/7</span>
    </div>
    <p className="text-xs opacity-90">
      Para emergencias, solo necesitas llenar los campos marcados con *
    </p>
  </div>
</div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl border-1/60">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                {/* Preferred Hours */}
                <div className="mb-8 flex justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsEmergency(!isEmergency)}
                  className={`w-full px-3 py-1.5 cursor-pointer rounded-lg font-semibold text-lg transition duration-200 flex items-center justify-center space-x-2 ${
                    isEmergency 
                      ? 'bg-red-500 text-white shadow-lg hover:bg-red-600' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <AlertCircle className="w-6 h-6" />
                  <span>{isEmergency ? '🚨 Emergencia activada' : '¿Es una emergencia?'}</span>
                </button>

              </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de Teléfono/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      placeholder="+57 301 234 5678"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo Electrónico {!isEmergency && '*'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      placeholder="tu@email.com"
                      required={!isEmergency}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de Servicio *
                    </label>
                    <select
                      name="tipoServicio"
                      value={formData.tipoServicio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio: ServiceType) => (
                        <option key={servicio} value={servicio}>{servicio}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Barrio/Zona {!isEmergency && '*'}
                    </label>
                    <input
                      type="text"
                      name="barrio"
                      value={formData.barrio}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      placeholder="Ej: Chapinero, Zona Rosa"
                      required={!isEmergency}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Dirección Completa *
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleInputChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                      placeholder="Calle 123 # 45-67, Apto 890"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Descripción del Problema/Trabajo
                  </label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                    placeholder="Describe detalladamente el problema o trabajo que necesitas..."
                  />
                </div>

                               


                {/* Submit Button */}
                <div className="">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[#d44d13]/90 to-[#d44d13]/90 text-white font-semibold py-4 px-8 rounded-lg hover:from-[#d44d13] hover:to-[#d44d13] transform hover:scale-[1.02] transition duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-5 h-5" />
                    <span>{isEmergency ? 'Enviar Solicitud de Emergencia' : 'Solicitar Servicio'}</span>
                  </button>
                </div>

                <div className="text-center text-xs text-gray-500">
                  Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;