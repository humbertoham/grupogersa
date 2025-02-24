'use client'
import { ServiceCard } from "@/components/servicecard";
import { ServicesHero } from "@/components/serviceshero";
import { PackageBuilder } from "@/components/packagebuilder";
import { ProductGrid } from "@/components/productgrid";




export default function ServicesPage() {
    return (
      <div className="min-h-screen">
        <ServicesHero />
        
        <main className="max-w-6xl mx-auto px-4 py-16">
          <ServiceCard
            title="RECARGA EXPRESS DE EXTINTORES"
            items={[
              'Certificación incluida',
              'Servicio móvil disponible',
              'Garantía de 1 año'
            ]}
            time="3-5 horas"
            warranty="1 año"
            max="Máximo 5 extintores por cliente"
          />
  
          <PackageBuilder />
          
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8">Nuestros Productos</h2>
            <ProductGrid />
          </section>
  
          
          {/* Add other sections */}
        </main>
      </div>
    );
  }