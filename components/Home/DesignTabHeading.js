
import React from 'react'

export default function DesignTabHeading({title,subtitle,span}) {
  return (
        <section class="designtab-heading">
            <h1>{title} <span>{span}</span></h1>
            <p>
                {subtitle}
            </p>
        </section>
  )
}
