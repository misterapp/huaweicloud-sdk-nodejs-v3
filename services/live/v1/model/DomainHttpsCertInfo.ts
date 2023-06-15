

export class DomainHttpsCertInfo {
    private 'certificate_format'?: DomainHttpsCertInfoCertificateFormatEnum | undefined;
    public certificate: string;
    private 'certificate_key': string | undefined;
    private 'force_redirect'?: boolean | undefined;
    public constructor(certificate?: any, certificateKey?: any) { 
        this['certificate'] = certificate;
        this['certificate_key'] = certificateKey;
    }
    public withCertificateFormat(certificateFormat: DomainHttpsCertInfoCertificateFormatEnum): DomainHttpsCertInfo {
        this['certificate_format'] = certificateFormat;
        return this;
    }
    public set certificateFormat(certificateFormat: DomainHttpsCertInfoCertificateFormatEnum | undefined) {
        this['certificate_format'] = certificateFormat;
    }
    public get certificateFormat() {
        return this['certificate_format'];
    }
    public withCertificate(certificate: string): DomainHttpsCertInfo {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateKey(certificateKey: string): DomainHttpsCertInfo {
        this['certificate_key'] = certificateKey;
        return this;
    }
    public set certificateKey(certificateKey: string | undefined) {
        this['certificate_key'] = certificateKey;
    }
    public get certificateKey() {
        return this['certificate_key'];
    }
    public withForceRedirect(forceRedirect: boolean): DomainHttpsCertInfo {
        this['force_redirect'] = forceRedirect;
        return this;
    }
    public set forceRedirect(forceRedirect: boolean | undefined) {
        this['force_redirect'] = forceRedirect;
    }
    public get forceRedirect() {
        return this['force_redirect'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainHttpsCertInfoCertificateFormatEnum {
    PEM = 'PEM'
}
