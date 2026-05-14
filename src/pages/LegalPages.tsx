import { LegalCenterLayout } from '../components/LegalCenterLayout';
import { LEGAL_UPDATED_LABEL } from '../lib/constants';

export function PrivacyPage() {
  return (
    <LegalCenterLayout
      docTitle="Política de Privacidad (RGPD)"
      introBox="Subvenia trata datos personales con fines legítimos, transparencia y medidas de seguridad acordes al riesgo. Este documento resume cómo lo hacemos cuando vuestra entidad utiliza la web o los servicios asociados."
      sections={[
        {
          id: 'responsable',
          icon: 'apartment',
          title: 'Responsable del tratamiento',
          paragraphs: [
            'El responsable del tratamiento de los datos recogidos a través del sitio web y formularios de contacto es Subvenia, en la forma que corresponda según el contrato o relación mercantil que mantengáis con nosotros.',
            'Para ejercer derechos o consultas sobre privacidad podéis escribir a contacto@subvenia.ai indicando la referencia de vuestra entidad.',
          ],
        },
        {
          id: 'datos-recopilados',
          icon: 'grid_view',
          title: 'Datos que recopilamos',
          paragraphs: [
            'Recopilamos únicamente los datos necesarios en cada momento, en línea con el principio de minimización del Reglamento (UE) 2016/679 (RGPD) y la normativa española de desarrollo.',
          ],
          bullets: [
            {
              label: 'Datos de identificación y contacto:',
              text: 'nombre, cargo, correo electrónico profesional, teléfono y datos de la entidad que representáis cuando rellenáis formularios o solicitáis información.',
            },
            {
              label: 'Datos de navegación y dispositivo:',
              text: 'dirección IP, tipo de navegador, páginas visitadas y marcas temporales, cuando resultan necesarios por seguridad o mejora del servicio y, en su caso, con base en el consentimiento para cookies no esenciales.',
            },
            {
              label: 'Datos de relación contractual:',
              text: 'información necesaria para prestar el servicio SaaS contratado (usuarios, roles, logs operativos), según lo acordado en el contrato.',
            },
          ],
        },
        {
          id: 'finalidad',
          icon: 'settings',
          title: 'Finalidad del tratamiento',
          paragraphs: [
            'Los datos se tratan con las siguientes finalidades principales: gestionar solicitudes de contacto y demos, formalizar y ejecutar contratos, prestar soporte, cumplir obligaciones legales, mejorar la seguridad de la plataforma y, solo si lo aceptáis, medir el uso del sitio con cookies analíticas.',
          ],
        },
        {
          id: 'base-juridica',
          icon: 'gavel',
          title: 'Base jurídica',
          paragraphs: [
            'La licitud del tratamiento se apoya, según el caso, en la ejecución de un contrato o medidas precontractuales (art. 6.1.b RGPD), el interés legítimo en la seguridad y mejora razonable del servicio (art. 6.1.f RGPD), el cumplimiento de obligaciones legales (art. 6.1.c RGPD) y, para cookies no esenciales o comunicaciones opcionales, en el consentimiento (art. 6.1.a RGPD), que podéis retirar en cualquier momento sin afectar a la licitud del tratamiento previo.',
          ],
        },
        {
          id: 'conservacion',
          icon: 'schedule',
          title: 'Conservación',
          paragraphs: [
            'Conservamos los datos el tiempo necesario para cumplir la finalidad para la que fueron recabados y las obligaciones legales o contractuales aplicables. Transcurrido ese plazo, se suprimen o anonimizan de forma segura salvo que la ley exija un bloqueo temporal.',
          ],
        },
        {
          id: 'cesion',
          icon: 'ios_share',
          title: 'Cesión de datos',
          paragraphs: [
            'No vendemos vuestros datos personales. Solo comunicamos información a terceros cuando es estrictamente necesario para prestar el servicio (por ejemplo, proveedores de infraestructura o comunicaciones con acuerdos de tratamiento de datos conforme al art. 28 RGPD), o cuando una norma legal lo imponga.',
          ],
        },
        {
          id: 'transferencias',
          icon: 'public',
          title: 'Transferencias internacionales',
          paragraphs: [
            'Si algún encargado del tratamiento ubicado fuera del Espacio Económico Europeo accediera a datos personales, nos aseguramos de contar con una base adecuada (decisión de adecuación, cláusulas contractuales tipo u otras garantías previstas en el RGPD). Podéis solicitar información adicional a través de contacto@subvenia.ai.',
          ],
        },
        {
          id: 'derechos',
          icon: 'badge',
          title: 'Derechos (acceso, rectificación, supresión, oposición, limitación, portabilidad)',
          paragraphs: [
            'Podéis ejercer los derechos reconocidos en el RGPD escribiendo a contacto@subvenia.ai. En su caso, tendréis derecho a presentar reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
            'Si el tratamiento se basa en el consentimiento, podréis retirarlo en cualquier momento. Para cookies, podéis ajustar vuestra elección con el banner de cookies o la configuración del navegador.',
          ],
        },
        {
          id: 'seguridad-tratamiento',
          icon: 'shield',
          title: 'Seguridad del tratamiento',
          paragraphs: [
            'Aplicamos medidas técnicas y organizativas proporcionadas al riesgo: cifrado en tránsito, controles de acceso, registro de actividad relevante y revisiones periódicas. Más detalle técnico en la página de Seguridad.',
          ],
        },
        {
          id: 'menores',
          icon: 'child_care',
          title: 'Menores de edad',
          paragraphs: [
            'Los servicios de Subvenia están dirigidos a personas jurídicas y profesionales. No recabamos datos de menores de 14 años de forma intencionada. Si tenéis conocimiento de que un menor nos ha facilitado datos, contactadnos para su eliminación.',
          ],
        },
        {
          id: 'cambios',
          icon: 'update',
          title: 'Cambios en esta política',
          paragraphs: [
            'Podemos actualizar este texto para reflejar cambios legales o del servicio. Publicaremos la versión vigente en esta página con la fecha de actualización indicada en el encabezado del Centro Legal.',
          ],
        },
        {
          id: 'cookies',
          icon: 'cookie',
          title: 'Cookies y preferencias',
          paragraphs: [
            'Utilizamos cookies y tecnologías similares estrictamente necesarias para el funcionamiento del sitio (por ejemplo, mantener la sesión o recordar vuestras preferencias de consentimiento).',
            'Las cookies de medición o analítica solo se instalan si pulsáis «Aceptar todas» en el banner. Si elegís «Solo necesarias», seguís navegando sin esas cookies. Podéis modificar la decisión borrando el almacenamiento local del sitio o contactándonos.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}

export function TermsPage() {
  return (
    <LegalCenterLayout
      docTitle="Términos y Condiciones de Uso"
      introBox="El acceso y uso de la web y, en su caso, de la plataforma Subvenia implica la aceptación de estas condiciones por parte de la entidad o profesional que actúa en nombre de la misma."
      sections={[
        {
          id: 'objeto',
          icon: 'contract',
          title: 'Objeto y ámbito',
          paragraphs: [
            'Estas condiciones regulan el uso del sitio web de Subvenia y, cuando corresponda, del software en modo servicio contratado. Si existiera un contrato marco firmado, prevalecerá lo pactado en él en caso de contradicción.',
          ],
        },
        {
          id: 'uso-permitido',
          icon: 'verified_user',
          title: 'Uso permitido',
          paragraphs: [
            'El servicio debe utilizarse exclusivamente para fines lícitos y profesionales, en cumplimiento de la normativa aplicable (incluida la de subvenciones y competencia).',
            'Queda prohibido el uso que vulnere la seguridad, la estabilidad o la confidencialidad del servicio, así como la extracción automatizada no autorizada o el uso que suponga un uso abusivo de los recursos.',
          ],
        },
        {
          id: 'cuentas',
          icon: 'key',
          title: 'Cuentas y credenciales',
          paragraphs: [
            'El cliente es responsable de la veracidad de los datos aportados y de la custodia de las credenciales de sus usuarios. Debéis notificarnos de inmediato cualquier acceso no autorizado.',
          ],
        },
        {
          id: 'propiedad',
          icon: 'copyright',
          title: 'Propiedad intelectual',
          paragraphs: [
            'Los elementos de software, diseño, marcas y contenidos propios de Subvenia están protegidos por la normativa aplicable. No se concede licencia alguna salvo la indispensable para usar el servicio según lo contratado.',
          ],
        },
        {
          id: 'limitacion',
          icon: 'balance',
          title: 'Limitación de responsabilidad',
          paragraphs: [
            'Subvenia presta el servicio con diligencia profesional dentro de los límites técnicos y legales razonables. No somos asesores legales ni garantizamos la concesión de ayudas públicas: las decisiones finales corresponden a los organismos competentes.',
          ],
        },
        {
          id: 'ley',
          icon: 'gavel',
          title: 'Modificaciones y ley aplicable',
          paragraphs: [
            'Podemos actualizar estos términos; la versión vigente estará publicada en esta página. Salvo pacto en contrario, se aplicará la legislación española y los tribunales de Barcelona, sin perjuicio de normas imperativas en materia de consumo cuando correspondan.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}

export function SecurityPage() {
  return (
    <LegalCenterLayout
      docTitle="Política de Seguridad de la Información"
      introBox="La confidencialidad, integridad y disponibilidad de los datos que tratáis con Subvenia son prioridad operativa. Este resumen describe el enfoque general; el detalle contractual puede ampliarse en anexos técnicos."
      sections={[
        {
          id: 'compromiso',
          icon: 'encrypted',
          title: 'Compromiso y gobernanza',
          paragraphs: [
            'Mantenemos un enfoque de seguridad basado en riesgo, con responsables designados y revisiones periódicas de controles, proveedores y accesos.',
          ],
        },
        {
          id: 'controles-tecnicos',
          icon: 'shield_lock',
          title: 'Controles técnicos',
          paragraphs: [
            'Cifrado en tránsito (TLS), segregación de entornos cuando aplica, control de accesos con mínimo privilegio, autenticación reforzada donde proceda y monitorización de eventos relevantes.',
            'Realizamos evaluaciones y pruebas orientadas a reducir vulnerabilidades conocidas, sin perjuicio de que la seguridad absoluta no exista.',
          ],
        },
        {
          id: 'continuidad',
          icon: 'cloud_sync',
          title: 'Continuidad y copias de seguridad',
          paragraphs: [
            'Contamos con procedimientos de copia de seguridad y recuperación acordes al servicio contratado, orientados a minimizar el impacto ante incidentes técnicos.',
          ],
        },
        {
          id: 'reporte',
          icon: 'report',
          title: 'Reporte de incidentes',
          paragraphs: [
            'Si detectáis una vulnerabilidad o un incidente de seguridad, escribid a contacto@subvenia.ai con el máximo detalle posible (sin incluir datos personales innecesarios). Valoramos y respondemos según severidad y urgencia.',
          ],
        },
      ]}
      updatedAt={LEGAL_UPDATED_LABEL}
    />
  );
}
